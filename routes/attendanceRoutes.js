import express from "express";
import Attendance from "../models/Attendance.js";

const router = express.Router();


// ✅ MARK ATTENDANCE
router.post("/", async (req, res) => {
  try {
    const attendance = new Attendance({
      student: req.body.student
    });

    const saved = await attendance.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ GET ALL ATTENDANCE
router.get("/", async (req, res) => {
  try {
    const records = await Attendance.find().populate("student");
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ GET ATTENDANCE BY STUDENT
router.get("/student/:id", async (req, res) => {
  try {
    const records = await Attendance.find({
      student: req.params.id
    }).populate("student");

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;