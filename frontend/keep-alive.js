import https from 'https';
import http from 'http';

// Configuration
const RENDER_URL = 'https://mediconnect-02hm.onrender.com';
const PING_INTERVAL = 5 * 60 * 1000; // 5 minutes in milliseconds
const TIMEOUT = 30000; // 30 seconds timeout

// Function to ping the server
function pingServer() {
    const startTime = Date.now();
    
    console.log(`[${new Date().toISOString()}] Pinging ${RENDER_URL}...`);
    
    const request = https.get(RENDER_URL, {
        timeout: TIMEOUT,
        headers: {
            'User-Agent': 'Keep-Alive-Script/1.0'
        }
    }, (response) => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        
        console.log(`[${new Date().toISOString()}] ✅ Success! Status: ${response.statusCode}, Response time: ${responseTime}ms`);
        
        // Log response headers for debugging
        if (response.statusCode === 200) {
            console.log(`[${new Date().toISOString()}] Server is awake and responding`);
        }
    });
    
    request.on('error', (error) => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        
        console.error(`[${new Date().toISOString()}] ❌ Error pinging server: ${error.message} (${responseTime}ms)`);
        
        // Don't exit on error, just log it and continue
        if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
            console.log(`[${new Date().toISOString()}] Server might be sleeping, will try again in 5 minutes`);
        }
    });
    
    request.on('timeout', () => {
        console.error(`[${new Date().toISOString()}] ⏰ Request timed out after ${TIMEOUT}ms`);
        request.destroy();
    });
}

// Function to start the keep-alive service
function startKeepAlive() {
    console.log('🚀 Starting Keep-Alive service for Render backend...');
    console.log(`📍 Target URL: ${RENDER_URL}`);
    console.log(`⏰ Ping interval: ${PING_INTERVAL / 1000} seconds`);
    console.log('📝 Press Ctrl+C to stop the service');
    console.log('─'.repeat(60));
    
    // Ping immediately on start
    pingServer();
    
    // Set up interval for regular pings
    const interval = setInterval(pingServer, PING_INTERVAL);
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
        console.log('\n🛑 Shutting down Keep-Alive service...');
        clearInterval(interval);
        console.log('✅ Service stopped successfully');
        process.exit(0);
    });
    
    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
        console.error(`💥 Uncaught Exception: ${error.message}`);
        console.log('🔄 Restarting service in 10 seconds...');
        setTimeout(() => {
            startKeepAlive();
        }, 10000);
    });
}

// Start the service
startKeepAlive();
