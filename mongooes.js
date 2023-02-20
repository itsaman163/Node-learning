const mongoose = require("mongoose");

const saveInDb = async ()=>{
    mongoose.set('strictQuery', false);
    await mongoose.connect("mongodb://127.0.0.1:27017/e-com");
    const ProductSchema = new mongoose.Schema({
        name:String,
        price: Number,
        brand:String,
        category:String,
    });
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = new ProductModel(
        {
            name:"m8",
            price:1212,
            category:"mobile",
            brand:"Apple"
        }
        );
    let result = await data.save();
    console.log(result);
};
saveInDb();