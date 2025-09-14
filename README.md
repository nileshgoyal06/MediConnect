# MediConnect Keep-Alive Script

This script automatically pings your Render backend every 5 minutes to prevent it from going to sleep due to inactivity.

## 🚀 Quick Start

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Make sure Node.js version 14 or higher is installed

2. **Run the script**
   ```bash
   node keep-alive.js
   ```

   Or using npm:
   ```bash
   npm start
   ```

## 📋 What it does

- ✅ Pings `https://mediconnect-02hm.onrender.com` every 5 minutes
- ✅ Logs all ping attempts with timestamps
- ✅ Shows response times and status codes
- ✅ Handles errors gracefully without stopping
- ✅ Provides graceful shutdown with Ctrl+C

## 🔧 Configuration

You can modify these settings in `keep-alive.js`:

- **RENDER_URL**: Your Render backend URL
- **PING_INTERVAL**: Time between pings (default: 5 minutes)
- **TIMEOUT**: Request timeout (default: 30 seconds)

## 📊 Sample Output

```
🚀 Starting Keep-Alive service for Render backend...
📍 Target URL: https://mediconnect-02hm.onrender.com
⏰ Ping interval: 300 seconds
📝 Press Ctrl+C to stop the service
────────────────────────────────────────────────────────────
[2024-01-15T10:00:00.000Z] Pinging https://mediconnect-02hm.onrender.com...
[2024-01-15T10:00:01.234Z] ✅ Success! Status: 200, Response time: 1234ms
[2024-01-15T10:00:01.234Z] Server is awake and responding
```

## 🖥️ Running on Different Platforms

### Windows
```cmd
node keep-alive.js
```

### macOS/Linux
```bash
node keep-alive.js
```

### Background Service (Linux/macOS)
```bash
nohup node keep-alive.js > keep-alive.log 2>&1 &
```

## 🛠️ Troubleshooting

- **Connection refused**: Server might be sleeping, script will continue trying
- **Timeout errors**: Check your internet connection
- **Permission errors**: Make sure you have Node.js installed properly

## 📝 Notes

- The script uses only built-in Node.js modules (no external dependencies)
- It's designed to run continuously without consuming much resources
- You can run this on any machine that has internet access
- Consider running this on a VPS or cloud service for 24/7 uptime

## 🔄 Alternative Solutions

If you prefer other approaches:

1. **Uptime Robot**: Free service that monitors your site
2. **Pingdom**: Another monitoring service
3. **GitHub Actions**: Set up a scheduled workflow
4. **Vercel Cron Jobs**: If you're using Vercel for other services
