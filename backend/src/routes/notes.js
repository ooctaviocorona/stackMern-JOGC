const { Router } = require('express');
const router = Router();

// Importar todas las funciones a realizar de notes_controller para reducir el documento
const {getNotes, getNote, createNote, updateNote, deleteNote} = require('../controllers/notes_controller');

router.route('/')
    .get(getNotes) 
    .post(createNote);

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote);


module.exports = router;