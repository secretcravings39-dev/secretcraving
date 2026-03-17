import { MongoClient, Db } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME || "elvevier";

if (!MONGO_URI) {
  throw new Error("MONGO_URI environment variable is not set.");
}

const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

const clientPromise: Promise<MongoClient> =
  globalForMongo._mongoClientPromise ??
  new MongoClient(MONGO_URI).connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClientPromise = clientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db(DB_NAME);
}
