const dbConnectio = require("./mongodb");

const deleteData = async () => {
let db = await dbConnectio();
let result = await db.deleteOne({brand:"sony"});
// let result = await db.deleteMany({brand:"sony"});
if(result.deletedCount > 0){
    console.log("delete data successfully...")
}
};
deleteData();