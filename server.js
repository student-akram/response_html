const express = require("express");
const path = require("path");

const app = express();

// middleware to read JSON
app.use(express.json());

// Serve form
app.get("/api/products", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

// Handle POST
app.post("/api/products", (req, res) => {

  const product = req.body.productName;

  console.log("Received:", product);

  res.send(`Product Added: ${product}`);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
