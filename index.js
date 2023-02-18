const {MongoClint} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = "ecom";
const client = new MongoClint(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
}