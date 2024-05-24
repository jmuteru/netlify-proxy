const corsAnywhere = require('cors-anywhere');

// Configure CORS Anywhere proxy server
const host = '0.0.0.0'; // Allow requests from any origin
const port = process.env.PORT || 8081; // Port on which the proxy server will listen

// Create a serverless function handler
const serverless = require('serverless-http');

// Create the CORS Anywhere server
const server = corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
});

module.exports.handler = serverless((req, res) => {
  req.url = req.url.replace("/.netlify/functions/proxy", "");
  server.emit('request', req, res);
});
