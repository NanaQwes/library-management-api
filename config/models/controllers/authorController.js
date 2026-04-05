const Author = require("../models/Author");

exports.createAuthor = async (req, res) => {
  const author = await Author.create(req.body);
  res.json(author);
};

exports.getAuthors = async (req, res) => {
  const authors = await Author.find();
  res.json(authors);
};

exports.getAuthor = async (req, res) => {
  const author = await Author.findById(req.params.id);
  res.json(author);
};

exports.updateAuthor = async (req, res) => {
  const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(author);
};

exports.deleteAuthor = async (req, res) => {
  await Author.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};