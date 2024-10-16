import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

/*
const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());

// In-memory data storage
let items = [];
let currentId = 1;

// CREATE - Add a new item
app.post("/items", (req, res) => {
  const newItem = { id: currentId++, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

// READ - Get all items
app.get("/items", (req, res) => {
  res.json(items);
});

// READ - Get a single item by ID
app.get("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("Item not found");
  res.json(item);
});

// UPDATE - Update an item by ID
app.put("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("Item not found");

  Object.assign(item, req.body);
  res.json(item);
});

// DELETE - Delete an item by ID
app.delete("/items/:id", (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Item not found");

  const deletedItem = items.splice(index, 1);
  res.json(deletedItem);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/