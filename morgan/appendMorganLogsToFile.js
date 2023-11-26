const express = require('express'),
morgan = require('morgan'),
// import built in node modules fs and path
fs = require('fs'),
path = require('path');

const app = express();

//create a write stream (in append mode)
// a 'log.txt' file is created in root directory

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'});

//setup the logger
app.use(morgan('combined', {stream: accessLogStream}));

app.get('/', (req, res) => {
    res.send('Welcome to my app! -Morgan-');
});

app.get('/secreturl', (req, res) => {
    res.send('The secret url with super top-secret content.');
});

app.listen(8080, () => {
    console.log('App is listening on port 8080.');
});