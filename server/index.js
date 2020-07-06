require('dotenv').config();

const express=require('express'),
    axios=require('express'),
    massive=require('massive'),
    {SERVER_PORT, CONNECTION_STRING}=process.env,
    ctrl=require('./controller'),
    app=express();
    app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false
    }
  }).then((dbInstance) => {
    //   console.log(dbInstance)
      app.set('db', dbInstance);
  });


//endpoints

app.get('/api/inventory', ctrl.get_inventory)
app.post('/api/product', ctrl.add_product)
app.delete('/api/product/:id', ctrl.delete_product)
app.put('/api/product/:id', ctrl.edit_product)
app.get('/api/product/:id', ctrl.get_product)

app.listen(SERVER_PORT, console.log(`app listening at port ${SERVER_PORT}`))

