<div align="center">

# 📝 NoteSpace

### A modern, feature-rich notes app built with the MERN stack

[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

[📁 Repository](https://github.com/ashwinkasera05/notes-app)

</div>

---

## ✨ Features

- 🔐 **Secure Authentication** — JWT-based register/login with bcrypt password hashing
- 📝 **Full Note Management** — create, edit, duplicate, share, pin, and delete notes
- 🎨 **Color Labels** — Google Keep-style color coding (6 colors)
- 🏷️ **Categories** — organize notes by Study, Work, Ideas, Goals, Shopping
- 🔍 **Live Search** — instantly filter notes by title or content
- 🔲 **Grid / List View** — toggle layout based on preference
- 🌙 **Dark / Light Theme** — persistent theme toggle saved to localStorage
- ✏️ **Rich Editor** — Bold, Italic, and Checklist formatting
- 📊 **Live Dashboard Stats** — total notes, pinned notes, tags, colors used
- 👤 **Profile Page** — view account info and personal stats
- ⚙️ **Settings Page** — manage appearance preferences
- 🔒 **User Isolation** — every user only sees their own notes
- 📱 **Fully Responsive** — works seamlessly across devices

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js, React Router, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Atlas) with Mongoose |
| **Authentication** | JWT, bcrypt.js |
| **Styling** | Custom CSS with CSS variables (theming) |

---

## 📁 Project Structure

```
notes-app/
├── backend/
│   ├── server.js
│   ├── .env
│   ├── models/
│   │   ├── User.js
│   │   └── Note.js
│   └── routes/
│       ├── auth.js
│       └── notes.js
└── frontend/
    └── src/
        ├── App.js
        ├── App.css
        ├── index.js
        ├── components/
        │   └── Navbar.js
        └── pages/
            ├── Login.js
            ├── Register.js
            ├── Dashboard.js
            ├── Profile.js
            └── Settings.js
```

---

## ⚙️ Installation & Setup

### Backend
```bash
cd backend
npm install
node server.js
```
Runs on **http://localhost:5001**

### Frontend
```bash
cd frontend
npm install
npm start
```
Runs on **http://localhost:3000**

### Environment Variables (`backend/.env`)
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5001
```

---

## 🚀 How to Use

1. **Register** a new account or **Login** if you already have one
2. **Create notes** with title, content, color, and category
3. Use the **editor toolbar** for Bold, Italic, or Checklist formatting
4. **Pin** important notes to keep them on top
5. **Search** notes instantly using the search bar
6. Switch between **Grid** and **List** view
7. Toggle **Dark/Light mode** from the profile menu
8. Visit **Profile** to view your stats, or **Settings** to manage preferences

---

## 🧠 Key Technical Concepts

```javascript
// JWT authentication middleware
function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  req.user = jwt.verify(token, process.env.JWT_SECRET);
  next();
}

// User-isolated data fetching
router.get('/', auth, async (req, res) => {
  const notes = await Note.find({ user: req.user.id })
    .sort({ pinned: -1, createdAt: -1 });
  res.json(notes);
});
```

---

## 🔮 Future Improvements

- [ ] Rich text editor with full WYSIWYG support
- [ ] Note reminders and due dates
- [ ] Collaborative notes (shared with other users)
- [ ] Export notes to PDF
- [ ] Voice-to-text note creation

---

## 👨‍💻 Author

**Ashwin Kasera**

[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ashwinkasera05)

---

<div align="center">

⭐ **If you found this project helpful, please give it a star!** ⭐

</div>
