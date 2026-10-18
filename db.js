require('dotenv').config();
const { MongoClient } = require('mongodb');
let client;
let db;
async function connectToDatabase() {
  if (db) return db;
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is required');
  client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  db = client.db(process.env.MONGODB_DB || 'giftlink');
  return db;
}
async function closeDatabase() { if (client) await client.close(); client = null; db = null; }
module.exports = { connectToDatabase, closeDatabase };
