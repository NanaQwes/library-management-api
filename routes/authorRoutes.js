import express from "express";
import Author from "../models/Author.js";

const router = express.Router();


// CREATE AUTHOR
router.post("/", async (req, res) => {
  const author = new Author(req.body);
  const savedAuthor = await author.save();
  res.json(savedAuthor);
});


// GET ALL AUTHORS
router.get("/", async (req, res) => {
  const authors = await Author.find();
  res.json(authors);
});


// GET ONE AUTHOR
router.get("/:id", async (req, res) => {
  const author = await Author.findById(req.params.id);
  res.json(author);
});


// UPDATE AUTHOR
router.put("/:id", async (req, res) => {
  const updatedAuthor = await Author.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedAuthor);
});


// DELETE AUTHOR
router.delete("/:id", async (req, res) => {
  await Author.findByIdAndDelete(req.params.id);
  res.json({ message: "Author deleted" });
});

export default router;