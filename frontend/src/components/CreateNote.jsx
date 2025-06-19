import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CreateNote = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("https://notify-qc3m.onrender.com/notes");
        const data = await res.json();
        setNotes(data);
      } catch (err) {
        console.error("Error: ", err.message);
      }
    };
    fetchNotes();
  }, []);

  const handleCreate = async () => {
    try {
      const res = await fetch("https://notify-qc3m.onrender.com/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      const data = await res.json();
      setNotes((prev) => [...prev, data]);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://notify-qc3m.onrender.com/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log("Deleted Note", data);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  return (
    <div className="mt-3 p-10">
      <h1 className="text-3xl mb-3">Create Note</h1>
      <input
        type="text"
        className={`${props.darkMode ? 'placeholder-zinc-400' : 'placeholder-zinc-500'} w-full px-2 py-1 border border-gray-400 rounded focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all`}
        placeholder="Enter you title here:"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        className={` ${props.darkMode ? 'placeholder-zinc-400' : 'placeholder-zinc-500'} w-full px-2 py-1 border border-gray-400 rounded focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all mt-3`}
        placeholder="Enter you title here:"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        className="mt-2 bg-blue-400 hover:bg-blue-500 transition-all text-white px-5 py-1.5 rounded disabled:bg-blue-300  disabled:cursor-not-allowed "
        onClick={handleCreate}
        // disabled={input === "" ||  === ""}
        disabled={title.trim() === "" || description.trim() === ""}
      >
        Create
      </button>

      <h1 className="text-3xl mt-3">Your Created Note</h1>
      <div className="notes p-5 flex gap-4 flex-wrap">
        {notes.length === 0 ? (
          <p className="text-zinc-500 text-lg">There is no notes.</p>
        ) : (
          notes.map((note) => (
            <div key={note._id}>
              <div className="note rounded-lg border border-gray-400 min-w-[20rem] h-full mt-3 shadow-sm transition-all">
                <h1 className="text-xl ml-2 mt-1">{note.title}</h1>
                <hr className="text-gray-400 mt-0.5" />
                <p className="ml-2 mb-1 mt-3">{note.description}</p>
                <Link
                  className="px-2 py-1 text-white bg-blue-400 hover:bg-blue-500 mb-2 rounded ml-2 mt-3 transition-all"
                  to={`/update/${note._id}`}
                >
                  Update
                </Link>
                <Link
                  className="px-2 py-1 text-white  bg-red-400 hover:bg-red-500 mb-2 rounded ml-2 mt-3 transition-all"
                  onClick={() => handleDelete(note._id)}
                >
                  Delete
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CreateNote;
