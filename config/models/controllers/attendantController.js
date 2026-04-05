const Attendant = require("../models/Attendant");

exports.createAttendant = async (req, res) => {
  const attendant = await Attendant.create(req.body);
  res.json(attendant);
};

exports.getAttendants = async (req, res) => {
  const attendants = await Attendant.find();
  res.json(attendants);
};