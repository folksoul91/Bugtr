// dependencies
const express = require("express");
const app = express();
const PORT = 3000;
// data base
const budget = require("./models/budget");

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/budget", (req, res) => {
  res.render("index.ejs", { allBudgets: budget });
});

app.get("/budget/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/budget", (req, res) => {
  budget.push(req.body);
  res.redirect("/budget");
});

app.get("/budget/:indexOfBugetArray", (req, res) => {
  res.render("show.ejs", { budgets: budget[req.params.indexOfBugetArray] });
});

app.listen(PORT, () => {
  console.log("Listening on PORT:", PORT);
});
