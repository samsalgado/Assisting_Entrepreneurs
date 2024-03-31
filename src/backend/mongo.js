import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Connect to the database
MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  console.log("Connected to MongoDB server");

  // Get the database
  const db = client.db(dbName);

  // Close the connection
  client.close();
});