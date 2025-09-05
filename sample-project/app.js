const express = require('express');
const os = require('os');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Root endpoint - Setup verification
app.get('/', (req, res) => {
    const setupInfo = {
        message: '🎉 AI Course Setup Successful!',
        timestamp: new Date().toISOString(),
        system: {
            platform: os.platform(),
            arch: os.arch(),
            node_version: process.version,
            hostname: os.hostname()
        },
        tools: {
            express: '✅ Working',
            filesystem: fs.existsSync('./package.json') ? '✅ Working' : '❌ Error',
            json_parsing: '✅ Working'
        },
        next_steps: [
            'Test GitHub Copilot: try code completion in VS Code',
            'Test Git: run `git status`',
            'Explore VS Code extensions',
            'Review course materials'
        ]
    };
    
    res.json(setupInfo);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy',
        uptime: process.uptime(),
        memory: process.memoryUsage()
    });
});

// API endpoint to test JSON handling
app.post('/api/test', (req, res) => {
    console.log('Received POST request:', req.body);
    res.json({
        message: 'API endpoint working correctly',
        received_data: req.body,
        timestamp: new Date().toISOString()
    });
});

// Serve static files (for testing file serving)
app.use('/static', express.static(path.join(__dirname, 'public')));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: err.message 
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ 
        error: 'Route not found',
        available_routes: ['/', '/health', '/api/test']
    });
});

// Start server
app.listen(port, () => {
    console.log('\n🚀 AI Course Setup Test Server');
    console.log('=====================================');
    console.log(`📡 Server running at: http://localhost:${port}`);
    console.log(`🖥️  Platform: ${os.platform()} (${os.arch()})`);
    console.log(`📦 Node.js: ${process.version}`);
    console.log(`💾 Working Directory: ${process.cwd()}`);
    console.log('\n📋 Test URLs:');
    console.log(`   Main: http://localhost:${port}/`);
    console.log(`   Health: http://localhost:${port}/health`);
    console.log(`   API: POST http://localhost:${port}/api/test`);
    console.log('\n🛑 Press Ctrl+C to stop the server');
    console.log('=====================================\n');
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\n👋 Shutting down server gracefully...');
    process.exit(0);
});

// Export for testing purposes
module.exports = app;
