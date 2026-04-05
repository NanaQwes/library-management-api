const Book = require("../models/Book");

exports.createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
};

exports.getBooks = async (req, res) => {
  const books = await Book.find().populate("authors");
  res.json(books);
};

exports.getBook = async (req, res) => {
  const book = await Book.findById(req.params.id)
    .populate("authors")
    .populate("borrowedBy")
    .populate("issuedBy");

  res.json(book);
};

exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
};

exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

exports.borrowBook = async (req, res) => {
  const { studentId, attendantId, returnDate } = req.body;

  const book = await Book.findById(req.params.id);

  if (book.status === "OUT") {
    return res.status(400).json({ message: "Already borrowed" });
  }

  book.status = "OUT";
  book.borrowedBy = studentId;
  book.issuedBy = attendantId;
  book.returnDate = returnDate;

  await book.save();

  res.json(book);
};

exports.returnBook = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book.status === "IN") {
    return res.status(400).json({ message: "Already returned" });
  }

  book.status = "IN";
  book.borrowedBy = null;
  book.issuedBy = null;
  book.returnDate = null;

  await book.save();

  res.json(book);
};