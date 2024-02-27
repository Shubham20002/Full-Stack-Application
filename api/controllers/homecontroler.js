var items=[
    {
        id:1,
        name:"item1",
        description:"this is item 1"
    },
    {
        id:2,
        name:"item2",
        description:"this is item 2"
    },
    {
        id:3,
        name:"item3",
        description:"this is item 3"
    },
    {
        id:4,
        name:"item4",
        description:"this is item 4"
    },
]

//api to get all items
module.exports.getitems=(req,res)=>{
    try{
           res.status(200).json({items});
    }
    catch{
           res.status(400).json({message:"error while getting item"});
    }
}

//api to add item
module.exports.additem=(req,res)=>{
    try{
        console.log(req.body);
        items.map((i)=>{
            if(i.id==req.body.id){
                res.status(400).json({message:"item already present in list"});
                return;   
            }
        })
       items.push(req.body);
       res.status(200).json(items);
    }
    catch(error){
        res.status(400).json({message:"error while adding item",error:error});
    }
}

//api to update item

module.exports.updateitem=(req,res)=>{
    try{
        console.log(req.body.name);
     for(var i=0;i<items.length;i++){
        if(items[i].id==req.query.id){
            items[i].name=req.body.name;
            items[i].description=req.body.description;
            res.status(200).json({items});
        }
     }
    }
    catch(error){
        res.status(400).json({message:"error while updating item",error:error});
    }
}

//api to delete item

module.exports.deleteitem=(req,res)=>{
    try{
        const newitems=items.filter((i)=>{
            if(i.id!=req.query.id){
                return i;
            }
        })
        
        items=newitems;
        res.status(200).json({items,message:"item deleted successfully"});
    }
    catch(error){
        res.status(400).json({message:"error while deleting item",error:error});
    }
}