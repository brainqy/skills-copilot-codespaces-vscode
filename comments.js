// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments data
const comments = require('./comments.json');

// Create an endpoint that returns the comments data
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
