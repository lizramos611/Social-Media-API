const express = require('express');
const db = require('./config/connection');
const rooutes = require('./routes');
//express app
const app = express();
const PORT = process.env.PORT || 3001;
//middleware
app.use(express.urlencoded{extended: true});
app.use(express.json());
app.use(routes);


db.once('open', () => {
    app.listen(PORT, () => {
        console.log('Now listening!')
    })
})