require("dotenv").config();
const express = require("express");
const connectDB = require("./middleware/DB");
const Note = require("./model/Note");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.send("hello World");
});

app.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(201).json(notes);
  } catch (err) {
    res.status(500).json("Cannot get the notes", err.message);
  }
});

app.post("/create", async (req, res) => {
  let { title, description } = req.body;
  try {
    const note = await Note.create({
      title: title,
      description: description,
    });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json("Cannot create note.", err.message);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const noteId = req.params.id;

  try {
    const DeletedNote = await Note.findByIdAndDelete(noteId);
    res.status(201).json("Deleted", DeletedNote);
  } catch (err) {
    res.status(500).json("error in to delete Note", err.message);
  }
});

app.put("/update/:id", async (req, res) => {
  const noteId = req.params.id;
  let { title, description } = req.body;

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { title, description },
      { new: true }
    );
    res.status(201).json({
      message: "Note updated",
      note: updatedNote,
    });
  } catch (err) {
    res.status(500).json("error: ", err.message);
  }
});

app.get('/notes/:id', async(req, res)=>{
    const note = await Note.findById(req.params.id)
    res.json(note)
})

app.listen(5000, () => {
  console.log("Server is running.");
});
