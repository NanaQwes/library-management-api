import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true
  },
  borrowDate: {
    type: Date,
    default: Date.now
  },
  returnDate: {
    type: Date
  },
  returned: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Borrow = mongoose.model("Borrow", borrowSchema);

export default Borrow;