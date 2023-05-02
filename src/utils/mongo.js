import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to the .env.local file');
}



if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  if (!clientPromise) {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
}

export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  return { client, db };
}

export async function getFormById(id) {
  try {
    const db = await connectToDatabase();
    const collection = await db.collection('formData');
    const result = await collection.findOne({ _id: ObjectId(id) });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
