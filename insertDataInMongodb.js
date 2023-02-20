const dbConnection = require("./mongodb");

const insertData = async ()=>{
    const db = await dbConnection();
    const result = await db.insertMany([
        {name:"sony exp", brand:"sony",price:1245,category:"mobile"},
        {name:"sony exp", brand:"sony",price:1245,category:"mobile"},
        {name:"sony exp", brand:"sony",price:1245,category:"mobile"}
    ]);
    if(result.acknowledged == true){
        
        console.log("data inserted");
    }
} 
insertData();