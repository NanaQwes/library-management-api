import express from "express";
import Book from "../models/Book.js";

const router = express.Router();


// ✅ CREATE book
router.post("/", async (req, res) => {
  const book = new Book(req.body);
  const savedBook = await book.save();
  res.json(savedBook);
});


// ✅ GET all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().populate("author");
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ GET single book
router.get("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
});


// ✅ UPDATE book
router.put("/:id", async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedBook);
});


// ✅ DELETE book
router.delete("/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
});

// ✅ BORROW BOOK
router.put("/borrow/:id", async (req, res) => {
  const { name } = req.body;

  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (!book.available) {
    return res.status(400).json({ message: "Book already borrowed" });
  }

  book.available = false;
  book.borrowedBy = name;

  await book.save();

  res.json({ message: "Book borrowed successfully", book });
});

export default router;
