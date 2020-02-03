const express = require('express');
const bodyParser = require('body-parser');
// try use native body-parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


const config = require('../config.js');
const post = require('./components/post/network');
const errors = require('../network/errors');

const app = express();

app.use(bodyParser.json());


// ROUER
app.use('/api/post', post);

app.use(errors);

app.listen(config.post.port, () => {
    console.log('Service post listen on port 3002 ', config.post.port);
});