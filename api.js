const express = require("express");
const mongodb = require("mongodb");
const dbConnection = require("./mongodb");
const app = express();

app.use(express.json());          // To get data from body

app.get("/",async (req,resp)=>{
    let db = await dbConnection();
    let result = await db.find().toArray(); 
    resp.send(result);
});

app.post("/",async (req,resp)=>{
    let db = await dbConnection();
    let insert_data = req.body;
    let result = await db.insertOne(insert_data);
    if(result.acknowledged == true){
        resp.send("Data inserted successfully...");
    }
});

// app.put("/:name", async (req,resp)=>{  // OR with the help of query params
app.put("/", async (req,resp)=>{
    let db = await dbConnection();
    let body_data = req.body;

    let result = await db.updateOne(
        {name: body_data.name},           // OR {name: req.query.name}
        {$set:req.body
    });
    console.log(result);
});

app.delete("/", async (req,resp)=>{
    let db = await dbConnection();
    console.log(new mongodb.ObjectId(req.params.id));
    let result = await db.findOne({_id : new mongodb.ObjectId(req.params.id)});
    console.log(result);
    // if(result.deletedCount > 0){
    //     resp.send("Data deteted successfully...");
    // }
    // else{
    //     resp.send("Record Not found");
    // }
});
app.listen(5000);