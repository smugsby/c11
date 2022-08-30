/*const fs = require("fs");
//create notes const for future reference to link to database
const notes = require("../db/db.json");
const path = require("path");
//saves notes function
const saveNote = () => {
    fs.writeFileSync(
        path.resolve(_dirname, "../db/db.json"),
        JSON.stringify(notes)
    )
};

module.exports = (app) => {
    //retreive data/notes
    app.get("/api/notes", (req, res) => {
        res.json(notes.map((note, index) => ({
            //spread operator
            ...note,
            id: index + 1
        })))
    });
    //post data/notes
    app.post("/api/notes", (req, res) => {
        //push to body
        notes.push(req.body);
        console.log(req.body);
        //call fs funtion to write file
        saveNote();
        res.json(notes)
    });
};
*/
const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json')
console.log(notes)
const saveNote = () => {
    fs.writeFileSync(
        path.resolve(__dirname, '../db/db.json'),
        JSON.stringify(notes)
    )
}
module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        res.json(notes.map((note, index) => ({
            ...note,
            id: index + 1
        })))
    });

    app.post('/api/notes', (req, res) => {
        console.log(req.body)
        notes.push(req.body)
        saveNote();
        res.json(notes)
    });


};
