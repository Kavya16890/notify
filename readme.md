# 📝 Notes App

A simple full-stack Notes application built using **React** for the frontend, **Express.js** for the backend, and **MongoDB** for the database.

---

## 🚀 Features

- Create a new note with title and description  
- View all created notes  
- Update existing notes  
- Delete notes  
- Light/Dark mode toggle  
- Persistent data using MongoDB  
- Responsive and clean UI

---

## 🛠️ Tech Stack

### Frontend:
- React
- Tailwind CSS (optional styling)
- React Router DOM

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- CORS

---

## 📁 Project Structure

---
root/
│
├── backend/
│ ├── model/
│ │ └── Note.js
│ ├── middleware/
│ │ └── DB.js
│ └── index.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── CreateNote.js
│ │ │ ├── UpdateNote.js
│ │ │ ├── Navbar.js
│ │ │ └── NotFound.js
│ │ └── App.js
│ └── public/
│
└── README.md


---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Kavya16890/notify.git
cd notify
