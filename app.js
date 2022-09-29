
const express = require("express");
const ApiError = require("./app/api-error");

const contactsRouter = require("./app/routers/contact.route");

const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());
app.use("/api/contacts", contactsRouter);
app.get("/",(req, res) => {
    res.json({message:" Welcome to contact book application."});
});
//define error

app.use((err,req,res,next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

app.use((req, res, next)=>{
    return next(new ApiError(404, "Resource not found"));
});


module.exports = app;