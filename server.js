const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Static asserts / Public
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Production server is now listening on localhost:${PORT}`);
});
