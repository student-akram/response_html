const express = require("express");
const path = require("path");

const app = express();

// GET endpoint
app.get("/api/products", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
