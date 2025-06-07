// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://jp:11jps2802@cluster0.krlxyrw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("Reactify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
