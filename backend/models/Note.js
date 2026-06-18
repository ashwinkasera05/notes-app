const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, trim: true, default: '' },
  content: { type: String, required: true, trim: true },
  color: {
    type: String,
    enum: ['default', 'yellow', 'pink', 'blue', 'green', 'purple'],
    default: 'default'
  },
  category: {
    type: String,
    enum: ['Study', 'Work', 'Ideas', 'Goals', 'Shopping', 'General'],
    default: 'General'
  },
  pinned: { type: Boolean, default: false },
  tags: [{ type: String, trim: true, lowercase: true }],
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);