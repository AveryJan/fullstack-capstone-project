const { connectToDatabase, closeDatabase } = require('./db');
const gifts = require('./data/gifts.json');
(async () => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('gifts');
    await collection.deleteMany({});
    const { insertedCount, insertedIds } = await collection.insertMany(gifts);
    const inserted_items = { acknowledged: true, insertedCount, insertedIds };
    console.log('inserted_items:', JSON.stringify(inserted_items, null, 2));
  } catch (err) { console.error(err); process.exitCode = 1; }
  finally { await closeDatabase(); }
})();
