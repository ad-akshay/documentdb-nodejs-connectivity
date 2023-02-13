const MongoClient = require('mongodb').MongoClient;

handler = async (event, context) => {
  try {
    const username = ;
    const password =;
    const host = ;
    const port = ;
    const uri = `mongodb://${username}:${password}@${host}:${port}/sample-database?tls=true&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false`;
    //connect to MongoDB with certificate
    const client = await MongoClient.connect(
      uri,
      {
        useNewUrlParser: true,
        tlsCAFile: 'rds-combined-ca-bundle.pem',
      }
    );
    console.log("Connection established")

    //Specify the database and collection to be used
    const db = client.db('sample-database');
    const col = db.collection('sample-collection');

    //insert a new document to MongoDB
    const doc = await col.insertOne({ 'sample-key': 'sample-value' });
    client.close();
  }
  catch (err) {
    throw err
  }
}
handler()
