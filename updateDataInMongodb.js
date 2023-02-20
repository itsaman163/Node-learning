const dbConnection = require("./mongodb");

const updateData = async () => {
    let db = await dbConnection();
    let result = await db.updateOne(
        {brand:"Apple"},
        {$set:{brand:"mmama", price:444}});
    console.log(result);
}
updateData();