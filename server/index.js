const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const Card = require("./models/cardModel");
const User = require("./models/userModel");
const bcrypt = require("bcrypt");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/api/cards", async (req, res) => {
  try {
    const cards = await Card.find();
   
    res.json(cards);
  } catch (error) {
    console.error("Error fetching cards from MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const { username, password } = req.query;
    if (!username || !password) {
      return res.status(400).json({
        error: "Username and password are required in the query parameters.",
      });
    }

    const user = await User.findByUsername(username);

    if (user) {
      const isPasswordValid = await user.isValidPassword(password);
      if (isPasswordValid) res.json({ validCredentials: true, user });
      else res.json({ validCredentials: false, error: "Invalid password" });
    } else {
      res.json({ validCredentials: false, error: "User does not exist" });
    }
  } catch (error) {
    console.error("Error checking user existence:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/users", async (req, res) => {
  try {
     console.log(req.body);
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required." });
    }

    const existingUser = await User.findByUsername(username);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
