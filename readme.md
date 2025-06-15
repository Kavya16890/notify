# 📝 Notes App

A simple, full-stack Notes application built with **React** (frontend), **Express.js** (backend), and **MongoDB** (database).

---

## 🚀 Features

- Create, view, update, and delete notes
- Light/Dark mode toggle
- Persistent data with MongoDB
- Responsive and clean UI

---

## 🛠️ Tech Stack

**Frontend:**
- React
- Tailwind CSS (optional)
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS

---

## 📁 Project Structure

```
root/
├── backend/
│   ├── model/
│   │   ├── Note.js
│   │   └── User.js
│   ├── middleware/
│   │   ├── DB.js
│   │   └── authMiddleware.js
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── CreateNote.jsx
│   │   │   ├── UpdateNote.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── assets/
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Kavya16890/notify.git
cd notify
```

### 2. Setup Backend

```bash
cd backend
npm install
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## 📋 Usage

- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Create, update, or delete notes as needed.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.
