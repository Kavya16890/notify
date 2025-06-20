import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await fetch(`https://notify-qc3m.onrender.com/${id}`);
        const data = await res.json();
        setNote(data);
      } catch (err) {
        console.error("Error: ", err);
      }
    };
    fetchNote();
  }, [id]);
  const updateNote = async () => {
    try {
      const res = await fetch(`https://notify-qc3m.onrender.com/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      const data = await res.json();
      console.log("Updated Note: ", data);
      navigate("/");
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  if (!note) return <p className="p-5">Loading...</p>;
  return (
    <div>
      {/* <div key={note._id}> */}
      <div className="p-10 grid">
        <h1 className="text-3xl mb-3">Your Previous Note</h1>
        <input
          type="text"
          value={note.title}
          className="border border-gray-400  px-2 py-1 rounded focus:outline-none text-lg"
          readOnly
        />
        <input
          type="text"
          value={note.description}
          className="border border-gray-400  px-2 py-1 rounded focus:outline-none mt-2 text-lg"
          readOnly
        />
      </div>
      <div className="update p-10 grid">
        <h1 className="text-3xl mb-3">Update Your Note.</h1>
        <input
          type="text"
          className="border border-gray-400  px-2 py-1 rounded focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all"
          name="title"
          placeholder="Enter your title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          className="border border-gray-400  px-2 py-1 rounded focus:outline-none mt-2 focus:ring-4 focus:ring-blue-400 transition-all"
          name="description"
          placeholder="Enter your description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          className="mt-2 bg-blue-400 hover:bg-blue-500 transition-all text-white px-5 py-1.5 rounded disabled:bg-blue-300  disabled:cursor-not-allowed w-[6rem]"
          disabled={title.trim() === "" || description.trim() === ""}
          onClick={updateNote}
        >
          Update Note
        </button>
      </div>
    </div>
  );
};

export default UpdateNote;
