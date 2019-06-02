require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');
const app = express();
const {SERVER_PORT, DATABASE_STRING} = process.env;

app.use((req, res, next) => {
   console.log('api request made');
   next();
})

app.use(express.json());

massive(DATABASE_STRING).then(db => {
   app.set('db', db);
   console.log('database linked');
});

app.get('/api/inventory', controller.getInventory);




app.listen(SERVER_PORT, () => console.log(`server listening on ${SERVER_PORT}`));