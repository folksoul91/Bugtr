// dependencies
const express = require("express");
const app = express();
const PORT = 3000;
// data base
const budget = require("./models/budget");

//middleware
app.use(express.static("public"));

app.get("/budget", (req, res) => {
  res.render("index.ejs", { budgets: budget });
});

app.listen(PORT, () => {
  console.log("Listening on PORT:", PORT);
});
