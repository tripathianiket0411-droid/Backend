const express = require("express");
const {createNotesController, getAllNotesController, getSingleNoteController, getupdateNotesControllte, deleteNotesController} = require("../controllers/notes.controller");



const router = express.Router();

router.post("/create", createNotesController)
router.get("/allNotes", getAllNotesController)
router.get("/:id", getSingleNoteController)
router.put("/:id", getupdateNotesControllte)
router.delete("/:id", deleteNotesController)

module.exports = router;