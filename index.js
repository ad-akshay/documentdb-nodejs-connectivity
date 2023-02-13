const MongoClient = require('mongodb').MongoClient;

handler = async (event, context) => {
  try {
    const username = ;
    const password =;
    const host = ;
    const port = ;
    const uri = `${username}:${password}@${host}:${port}/sample-database/?tls=true&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false`;
    //connect to MongoDB with certificate
    const client = await MongoClient.connect(
      uri,
      {
        useNewUrlParser: true,
        tlsCAFile: '/var/folders/_c/ryzwzlj907951m04h_zbfd9m0000gn/T/rds-combined-ca-bundle.pem',
      }
    );
    console.log("Connection established")

    //Specify the database and collection to be used
    const db = client.db('akshay');
    const col = db.collection('dummy');

    //insert a new document to MongoDB
    const doc = await col.insertOne({ 'name': 'akshay;' });
    client.close();
  }
  catch (err) {
    throw err
  }
}
handler()
