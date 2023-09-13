const mongo=require("mongoose");
mongo.connect("mongodb://127.0.0.1:27017/pankaj")
.then(()=>
{
    console.log("connection is created");
})
.catch((error)=>
{
    console.log("connection failed");

});

// create a schema
const schema=new mongo.Schema(
    {
        _id:Number,
        name:
        {
            type:String,
            require:true
        },
        password:
        {
            type:String,
            require:true
        }
    }
);

// create a model 
const table=new mongo.model("table",schema);

module.exports=table;