import { MongoClient } from 'mongodb';
process.removeAllListeners('warning');
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const context = {
  'lastName': 'Beauford'
};
const projection = {
  'firstName': 0, 
};

const client = await MongoClient.connect(
  'mongodb://localhost:27017/',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const coll = client.db('test').collection('customer');
const cursor = coll.find(context, { projection });
const result = await cursor.toArray();
console.log(result);
await client.close();
