const dotenv = require("dotenv").config();

const express = require("express");
const app = express();

const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const mapRoutes = require("./routes/maps.routes");
const rideRoutes = require("./routes/ride.routes");


const cookieParser = require("cookie-parser");
app.use(cookieParser());


const cors = require("cors");
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const connectToDb = require("./db/db");
connectToDb();

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
app.use("/maps", mapRoutes);
app.use("/rides", rideRoutes);

app.get("/", (req, res) => {   
    res.send("Hello World!");
}); 

module.exports = app;