const notesModel = require("../models/notesModels");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = await notesModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "notes created successfully",
      data: newNote,
    });
  } catch (error) {
    console.log("error from creating data", error);
  }
};

const getAllNotesController = async (req, res) => {
  try {
    const allNotes = await notesModel.find();

    res.status(200).json({
      message: "All notes fetched",
      data: allNotes,
    });
  } catch (error) {
    console.log("error in fetching all notes data", error);
  }
};

const getSingleNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let note = await notesModel.findById(noteId);

    res.status(200).json({
      message: "notes fetched successfully",
      data: note,
    });
  } catch (error) {
    console.log("error in fetching single product", error);
  }
};

const getupdateNotesControllte = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;

    let updateNote = await notesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });

    return res.status(200).json({
      message: "notes successfully updated",
      data: updateNote,
    });
  } catch (error) {
    console.log("error in updating notes", error);
  }
};

const deleteNotesController = async (req, res) => {
  try {
    let noteId = req.params.id;

    await notesModel.findByIdAndDelete(noteId);

    res.status(200).json({
      message: "notes deleted successfully",
    });
  } catch (error) {
    console.log("error in  delete notes", error);
  }
};

module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  getupdateNotesControllte,
  deleteNotesController,
};
