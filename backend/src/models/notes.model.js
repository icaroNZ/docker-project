import mongoose from 'mongoose';

const NoteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      min: [3, 'Title should have more than 3 charaters'],
      max: [30, 'Title should have no more than 30 charaters'],
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      min: [5, 'Description should have more than 3 charaters'],
      max: [50, 'Description should have no more than 30 charaters'],
      required: [true, 'Description is required'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Note', NoteSchema);
