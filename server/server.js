const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// MongoDB connection URI (replace with your own connection string)
const mongoURI =
  "mongodb+srv://Admin:g12yuRuTVdkrSIom@cluster0.5jiepsw.mongodb.net/Cluster0";

// Define a Mongoose schema for your cards
const cardSchema = new Schema(
  {
    name: String,
    inIasi: Boolean,
    technologies: [String],
    packets: [
      {
        date: Number,
        amount: Number,
      },
    ],
    helpingMethod: [String],
    contactPeriod: String,
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Check for MongoDB connection errors
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define your API route
app.get("/api/cards", async (req, res) => {
  try {
    // Fetch data from MongoDB using Mongoose
    const cards = await Card.find();

    res.json(cards);
  } catch (error) {
    console.error("Error fetching cards from MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
