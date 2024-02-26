const items=[
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
module.exports.getitems=(req,res)=>{
    try{
           res.status(200).json({items});
    }
    catch{
           res.status(400).json({message:"error while getting item"});
    }
}