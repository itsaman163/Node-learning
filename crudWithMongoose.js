const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/e-com");
const productSchama = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

const AddNewRecord = async () => {
    const product = mongoose.model("products", productSchama); // create models
    const data = new product({
        name:"java",
        price:12121,
        brand:"java.tech",
        category:"technology"
    })
    let result = await data.save();
    console.log(result);
}
// AddNewRecord();

const updateData = async () => {
    const product = mongoose.model("products",productSchama);
    let data = await product.updateOne(
        {name:"java"},
        {
            $set:{price:100}
        }
    );
    console.log(data);
}
// updateData();
const deleteData = async () =>{
    const product = mongoose.model("products", productSchama);
    const data = await product.deleteOne({name:"java"});
    console.log(data);
};
// deleteData();
const selectFromCollection = async () =>{
    const product = mongoose.model("products",productSchama);
    const data = await product.find({name:'m8'});
    console.log(data);
};
// selectFromCollection();