import express from "express";
import Borrow from "../models/Borrow.js";

const router = express.Router();


// ✅ BORROW A BOOK
router.post("/", async (req, res) => {
  try {
    const borrow = new Borrow(req.body);
    const saved = await borrow.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ GET ALL BORROW RECORDS
router.get("/", async (req, res) => {
  try {
    const records = await Borrow.find()
      .populate("student")
      .populate("book");

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ RETURN A BOOK
router.put("/:id/return", async (req, res) => {
  try {
    const record = await Borrow.findByIdAndUpdate(
      req.params.id,
      {
        returned: true,
        returnDate: new Date()
      },
      { new: true }
    );

    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ DELETE RECORD (optional)
router.delete("/:id", async (req, res) => {
  try {
    await Borrow.findByIdAndDelete(req.params.id);
    res.json({ message: "Record deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;