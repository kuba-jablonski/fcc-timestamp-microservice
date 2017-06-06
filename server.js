const express = require('express');

const makeTimestamp = require('./helpers/timestamp');

const port = process.env.PORT || 3000;
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/:time', (req, res) => {
    let time = req.params.time;
    let parsedTime = makeTimestamp(time);
    res.status(200).send(parsedTime);
});

app.get('/:time/*', (req, res) => {
    res.redirect(404, '/');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});