require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.URI;

const db_task = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.log("MongoDB Connection Failed");
    console.log(err.message);
  }
};

module.exports = db_task;