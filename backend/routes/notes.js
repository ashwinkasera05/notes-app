const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Note = require('../models/Note');

function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

router.get('/', auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ pinned: -1, createdAt: -1 });
    res.json(notes);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.post('/', auth, async (req, res) => {
  try {
    const { title, content, color, category, tags } = req.body;
    if (!content) return res.status(400).json({ error: 'Content required' });
    const note = await Note.create({
      user: req.user.id,
      title,
      content,
      color: color || 'default',
      category: category || 'General',
      tags: tags || []
    });
    res.json(note);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, user: req.user.id });
    if (!note) return res.status(404).json({ error: 'Note not found' });
    const { title, content, color, category, pinned, tags } = req.body;
    if (title !== undefined) note.title = title;
    if (content !== undefined) note.content = content;
    if (color !== undefined) note.color = color;
    if (category !== undefined) note.category = category;
    if (pinned !== undefined) note.pinned = pinned;
    if (tags !== undefined) note.tags = tags;
    await note.save();
    res.json(note);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json({ message: 'Note deleted' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;