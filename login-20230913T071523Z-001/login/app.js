// import express 
const express=require("express");
// create a express object
const app =express();

// require a path 
const path =require("path");

const temp_path=path.join(__dirname,"./views");
console.log(temp_path);

// use middleware for connection 
app.use(express.urlencoded({extended:false}));


// create  a view enigne
app.set("view engine","hbs");
app.set("views",temp_path);



// import the database table

const table=require("./db/db.js");

// render the login file 
app.get("/",(req,res)=>
{
    res.render("login");
})

app.post('/register', (req, res) => {   
     const coll=new table({
    _id:req.body.phone,
    name:req.body.uname,
    password:req.body.password

})
    coll.save();

    res.render("login");
})
app.get("/register",(req,res)=>
{
    res.render("register");
})
// check user 
app.post("/user",async (req,res)=>
{

    const phone=req.body.phone;
    const pass=req.body.password;
    console.log(phone,pass);
    const result= await table.findOne({_id:phone});
    console.log(result);
    if(!result)
    {
        res.render("login",{
            msg:"wrong id"
        });

    }
    else 
    {
        res.render("user");
    }
})

// after login show the result to the user 
app.get("/user",(req,res)=>
{
    res.send("successfully login");
})


// create a server
app.listen(5000,()=>
{
    console.log("server is created");
})
