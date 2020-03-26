const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);


try {
    app.listen(3333);
    console.log('Listenng on port 3333');
}
catch{
    throw new Error('Unable to run on port 3333.');
}