const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(5000, () => {
  console.log("Server is running");
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