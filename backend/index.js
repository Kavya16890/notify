require("dotenv").config();
const express = require("express");
const connectDB = require("./middleware/DB");
const Note = require("./model/Note");
const User = require("./model/User");
const cors = require("cors");
const bcrypt = require("bcrypt");

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
    res.status(201).json(DeletedNote);
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
    res.status(500).json(err.message);
  }
});

app.get("/notes/:id", async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
});

// app.post("/signup", async (req, res) => {
//   let { name, email, password } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       res.status(400).json("This user already exists.");
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({
//       name: name,
//       email: email,
//       password: hashedPassword,
//     });
//     res.status(201).json({
//       message: "User has been created.",
//       User: user,
//     });
//   } catch (err) {
//     res.status(500).json( "something went wrong.");
//   }
// });

// app.get("/login", async (req, res) => {
//   let { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       res.status(404).json( "no user Found" );
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       res.status(401).json( "email or password is invalid." );
//     }

//     res.status(201).json({
//       name: user.name,
//       id: user._id,
//       email: user.email
//     })
//   } catch (err) {
//     res.status(500).json( "something went wrong." );
//   }
// });

app.listen(5000, () => {
  console.log("Server is running.");
});
