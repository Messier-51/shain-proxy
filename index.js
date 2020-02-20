const express = require('express');
const app = express();
const port = 4001;
const path = require('path')
const proxy = require('http-proxy-middleware');
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, '/client')));
// app.use('/getUserById/101', proxy({ target: 'http://localhost:4000', changeOrigin: true}));

app.get('/songs/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));

})

app.listen(port, () => { console.log(`Proxy-Server is running on ${port}`); });

