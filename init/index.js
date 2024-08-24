const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/HeavenStay";

main()
  .then(() => {
    console.log("connect to DB");
  })
  .catch((error) => {
    console.log(error);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66bced859ba987167a475fb9",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
