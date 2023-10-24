const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI =
      "mongodb+srv://Admin:g12yuRuTVdkrSIom@cluster0.5jiepsw.mongodb.net/Cluster0";

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectDB;
