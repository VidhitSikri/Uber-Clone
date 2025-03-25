const dotenv = require("dotenv").config();


const express = require("express");
const app = express();

const userRoutes = require("./routes/user.routes");


const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const connectToDb = require("./db/db");
connectToDb();

app.use("/users", userRoutes);

app.get("/", (req, res) => {   
    res.send("Hello World!");
}); 

module.exports = app;