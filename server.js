const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('This is an endpoint.');
});

app.listen(PORT, () => {
    console.log(`Service running on ${PORT}.`);
})

