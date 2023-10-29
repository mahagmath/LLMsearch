import { MongoClient } from 'mongodb';
process.removeAllListeners('warning');
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const prompt = {
  'lastName': 'Matthews'
};
const projection ={
  'firstName': 1, 
  'lastName': 1,
  '_id':0 
};

const client = await MongoClient.connect(
  'mongodb://localhost:27017/',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const coll = client.db('test').collection('customer');
const cursor = coll.find(prompt, { projection});
const result = await cursor.toArray();
console.log(result);
await client.close();
