const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  const filePath = path.join(publicPath, "index.html");
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(500).send(`File not found at: ${filePath}. Dir contents: ${fs.readdirSync(__dirname).join(", ")}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Desiqlo quiz running on port ${PORT}`));
