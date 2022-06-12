require("dotenv").config();

const connectDB = require("./config/db");
const Product = require("./models/Product");
const jsonProducts = require("./products.json");

const populated = async () => {
  try {
    // await connectDB(process.env.MONGO_URL);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("connectDB Successfuly...");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = populated;
