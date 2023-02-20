const dbConnection = require("./mongodb");
/*
* type one
*/
/*
dbConnection().then((resp)=>{
    resp.find({name:"nord ce2"}).toArray().then((response)=>{
        console.log(response)
    });
})
*/


/*
* type two
*/
const main = async ()=>{
    let data = await dbConnection();
    data = await data.find({}).toArray();
    console.log(data);
};

main();