const awsServerlessExpress = require("aws-serverless-express");
const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello from AWS Lambda!" });
});

app.get("/greet/:name", (req, res) => {
  res.json({ message: `Bonjour moisur, ${req.params.name}!` });
});

app.get("/time", (req, res) => {
    const currentTime = new Date().toISOString();
    res.json({ time: currentTime });
});

// Export Lambda Handler
const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
