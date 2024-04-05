const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/?readPreference=primary&appname=MOngoDI';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('userdb');
        const collection = database.collection('users');
        
        const result = await collection.insertOne({ name: 'John Doe' });
        console.log('Inserted document:', result.insertedId);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

main().catch(console.error);

module.exports = client;
