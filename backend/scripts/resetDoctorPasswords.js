import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import doctorModel from '../models/doctorModel.js'

async function connect() {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MONGODB_URI is not set in environment')
  }
  mongoose.connection.on('connected', () => console.log('Mongo connected'))
  await mongoose.connect(`${uri}/mediConnect`)
}

function derivePasswordFromName(fullName) {
  if (!fullName || typeof fullName !== 'string') return null
  const first = fullName.trim().split(/\s+/)[0]?.toLowerCase()
  if (!first) return null
  return `@${first}774`
}

async function run() {
  await connect()

  const doctors = await doctorModel.find({}, { name: 1 })
  console.log(`Found ${doctors.length} doctors. Updating passwords...`)

  for (const doc of doctors) {
    const plain = derivePasswordFromName(doc.name)
    if (!plain) {
      console.log(`Skip: unable to derive for _id=${doc._id} name='${doc.name}'`)
      continue
    }
    const hash = await bcrypt.hash(plain, 10)
    await doctorModel.updateOne({ _id: doc._id }, { $set: { password: hash } })
    console.log(`Updated ${doc.name} -> ${plain}`)
  }

  await mongoose.disconnect()
  console.log('Done.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})


