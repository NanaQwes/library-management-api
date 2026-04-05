import mongoose from "mongoose";
import express from "express";

import authorRoutes from "./routes/authorRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import borrowRoutes from "./routes/borrowRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";

const app = express();

app.use(express.json());

// ROUTES
app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/borrow", borrowRoutes);
app.use("/api/attendance", attendanceRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("API is running...");
});

// DATABASE
mongoose.connect("mongodb://127.0.0.1:27017/library")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// SERVER
app.listen(5001, () => console.log("Server running on port 5001"));