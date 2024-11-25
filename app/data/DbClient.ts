import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please set the MONGODB_URI environment variable") 
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db("Homepage");

export { db };