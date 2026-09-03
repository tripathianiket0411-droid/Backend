import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./components/NoteCard";

const App = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const [allNotes, setAllNotes] = useState([]);

  // let idDataForUpdate = null;
  const [updateNoteID, setUpdateNoteID] = useState(null)

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    console.log(formValues);
    e.preventDefault();

    setFormValues({
      title: "",
      description: "",
    });

    if (updateNoteID) {
      let res = await axios.put(
        `http://localhost:3000/notes/${updateNoteID}`,
        formValues,
      );
      console.log(res);
      getAllNotes();
      setUpdateNoteID(null)
    } else {
      let res = await axios.post(
        "http://localhost:3000/notes/create",
        formValues,
      );
      console.log(res);
      getAllNotes();
    }
  };

  const getAllNotes = async () => {
    try {
      let res = await axios.get("http://localhost:3000/notes/allNotes");
      setAllNotes(res.data.data);
      console.log(res);
    } catch (error) {
      console.log("error in fetching all notes", error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  let deleteNote = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`);
      getAllNotes();
      console.log(res);
    } catch (error) {
      console.log("delete api errorr", error);
    }
  };

  // let updateNotes = async (id) => {
  //   try {
  //     let res = await axios.put(`http://localhost:3000/notes/${id}`);
  //   } catch (error) {
  //     console.log("error  in updating notes", error);
  //   }
  // };

  let noteForUpdate = (note) => {
    console.log(note);
   setUpdateNoteID(note._id)
    setFormValues({
      title: note.title,
      description: note.description,
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg"
      >
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Title</label>

          <input
            onChange={handleChange}
            type="text"
            name="title"
            value={formValues.title}
            placeholder="Enter note title"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            onChange={handleChange}
            name="description"
            value={formValues.description}
            rows="5"
            placeholder="Enter note description"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-500"
            minLength={20}
            required
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {updateNoteID ? "Update Note" : "Add Note"}
        </button>
      </form>

      <div className="flex gap-4 flex-wrap pl-45">
        {allNotes.map((val) => (
          <NoteCard
            key={val._id}
            note={val}
            deleteNote={deleteNote}
            noteForUpdate={noteForUpdate}
            updateNoteID={updateNoteID}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
