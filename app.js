const express = require("express");
const cors = require("cors");

const app = express();
const contactsRouter = require("./app/routers/contact.route");

app.use(cors());
app.use("/api/contacts", contactsRouter);
app.use(express.json());

app.get("/",(req, res) => {
    res.json({message:" Welcome to contact book application."});
});

module.exports = app;
