import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://node:123@cluster0.3vkkinc.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
