import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  },

  available: {
    type: Boolean,
    default: true
  },

  borrowedBy: {
    type: String,
    default: null
  }

}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);

export default Book;