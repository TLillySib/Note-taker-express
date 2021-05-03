const notes = require('../db/notes');


// ROUTING
module.exports = (app) => {

    // API GET Requests

    app.get('/api/notes', (req, res) => res.json(notes));


    // API POST Requests
    app.post('/api/notes', (req, res) => {
        let newNote = req.body;
        notes.push(newNote);
        updateDb();
        return console.log("New note: " + newNote.title + "added");
      });
    // Access noteId via: req.params.noteId-display json for notes array indices of given id
      app.get('/api/notes/:id', (req, res) => {
        res.json(notes[req.params.id]);
      });
    

    //Delete a Note with a given id  
      app.delete('/api/notes/:id', (req, res) => {
        notes.splice(req.params.id, 1);
        updateDb();
        console.log("Note with id" +req.params.id+ "deleted");
    });
    
};
    