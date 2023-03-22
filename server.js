// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
// Specify the url prefix and import routes

// Static Files
app.use(express.static('public'));
app.use('/style', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/views', express.static(__dirname + 'public/views'))

// Load Index Webpage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html')
})

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
