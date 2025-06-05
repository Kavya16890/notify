const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongo.");
  } catch (err) {
    console.error("error to connect to mongo.", err);
  }
};

module.exports = connectToMongo;
