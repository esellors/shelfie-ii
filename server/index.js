const express = require('express');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
   console.log('server request made');
   next();
})

massive(CONNECTION_STRING).then(db => {
   console.log('database linked');
   app.set('db', db);
   
   app.get('/api/inventory', controller.getInventory);
   app.get('/api/inventory/:id', controller.getProduct);
   app.post('/api/product', controller.addProduct);
   app.delete('/api/product/:id', controller.deleteProduct);
   app.put('/api/product/:id', controller.editProduct);
});

app.listen(SERVER_PORT, () => console.log(`server listening on ${SERVER_PORT}`));