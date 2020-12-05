const User = require('./User');
const Company = require('./Company');

const express = require("express");
const port = 8000;
const app = express();

const users = [];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    console.log(req.url);
    res.send("<h1>Fake API</h1>")
});

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.post("/api/users/new", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json({ status: "ok, a new user is created." });
});

app.post("/api/companies/new", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json({ status: "ok, a new company is created." });
});

app.post("/api/user/company", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json({ status: "ok, user and company are created." });
});

app.listen(port, () => console.log(`lestining on port: ${port}`));