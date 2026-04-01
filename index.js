import express from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const appName = process.env.APP_NAME || 'Node API';

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Info endpoint (one of the 2 requested)
app.get('/api/v1/info', (req, res) => {
    res.status(200).json({
        app_name: appName,
        environment: process.env.NODE_ENV || 'production',
        version: '1.0.0'
    });
});

// Status endpoint (the other one of the 2 requested)
app.get('/api/v1/status', (req, res) => {
    res.status(200).json({
        cpu_usage: process.cpuUsage(),
        memory_usage: process.memoryUsage(),
        node_version: process.version
    });
});

// Default route
app.get('/', (req, res) => {
    res.send(`Welcome to ${appName}!`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Application Name: ${appName}`);
});
