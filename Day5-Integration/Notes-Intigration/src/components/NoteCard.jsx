
import React from "react";

const NoteCard = ({note, deleteNote, noteForUpdate, }) => {
  return (
    <div className="w-full flex flex-col gap-5  max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
      
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
      {note.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {note.description.length > 20? note.description.substring(0,20) : note.description}
      </p>

      {/* Buttons */}
      <div className="flex gap-3">
        <button onClick={() => noteForUpdate(note)} className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition">
         Update
        </button>

        <button onClick={() => deleteNote(note._id)} className="flex-1 bg-red-500 text-white py-2.5 rounded-lg font-semibold hover:bg-red-600 transition">
          Delete
        </button>
      </div>

    </div>
  );
};

export default NoteCard;
