
const express = require('express');
const path = require('path');

const app = express();

console.log(__dirname);

app.use(express.static(__dirname + '/dist'));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.listen(8080, function() {
  console.log("Server running");
});
