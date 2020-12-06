const User = require('./User');
const Company = require('./Company');

const express = require("express");

const port = 8000;
const app = express();

const users = [];
const companies = [];

app.get("/api", (req, res) => {
    console.log(req.url);
    res.send("<h1>Fake API</h1>")
});

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.get("/api/companies", (req, res) => {
    res.json(companies);
});

app.get("/api/users/new", (req, res) => {
    userX = new User();
    users.push(userX);
    res.json({ status: "ok, a new user is created.", user: userX });
});

app.get("/api/companies/new", (req, res) => {
    companyX = new Company();
    companies.push(companyX);
    res.json({ status: "ok, a new company is created.", company: companyX });
});

app.get("/api/user/company", (req, res) => {
    userX = new User();
    companyX = new Company();
    users.push(userX);
    companies.push(companyX);
    res.json({ status: "ok, user and company are created.", user: userX, company: companyX });
});

app.listen(port, () => console.log(`lestining on port: ${port}`));