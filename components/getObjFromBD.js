const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
 
module.exports = async function getObj(login,password) {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("salary");
        const collection = db.collection("workers");
        const result = await collection.findOne({login:login,password:password});

       // console.log(result);
         return result
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
