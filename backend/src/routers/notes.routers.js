import express from 'express';
import * as notes from '../controllers/notes.controller.js';

const router = express.Router();

router.get('/notes', notes.findAllNotes);
router.get('/notes/:id', notes.findOneNote);
router.post('/notes', notes.createNote);
router.delete('/notes/:id', notes.deleteOneNote);
router.patch('/notes/:id', notes.updateOneNote);

export default router;
