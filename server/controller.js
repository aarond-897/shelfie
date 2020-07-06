const axios=require('axios');

module.exports={
    get_inventory:(req,res)=>{
        const db=req.app.get('db');

        db.get_inventory()
            .then(products=>res.status(200).send(products))
            .catch(err=>res.status(500).send(err))
    },
    add_product:(req,res)=>{
        const db=req.app.get('db'),
             {name, price, img }=req.body;

        db.create_product(name, price, img)
             .then(()=>res.sendStatus(200))
             .catch(err=>console.log(err))
    },
    delete_product:(req,res)=>{
        const db=req.app.get('db'),
             {id}=req.params;
        db.delete_product(id)
            .then(()=>res.sendStatus(200))
            .catch(err=>console.log(err))
    },
    edit_product:(req,res)=>{
        const db = req.app.get('db'),
            {id}=req.params,
            {name, price, img}=req.body;
        
        db.edit_product(id,name,price,img)
            .then(()=> res.sendStatus(200))
            .catch((err)=>console.log(err))

    },
    get_product:(req,res)=>{
        const db = req.app.get('db'),
            {id}=req.params;

        db.get_product(id)
        .then(product=>res.status(200).send(product))
        .catch(err=>console.log(err))
    }
}