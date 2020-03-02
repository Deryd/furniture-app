const path = require('path')
const express = require('express')
var Datastore = require('nedb');
var db = new Datastore({filename : './db/notes'});
db.loadDatabase();

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, './index.html')

app.use(express.static(DIST_DIR))

app.get("/", (req, res) => {
    res.sendFile(HTML_FILE)
})

app.get("/notes", (req, res) => {
    let notes = [];
    notes = db.getAllData();

    res.send(notes);
})

app.put("/note/add", (req, res) => {
    res.send(req);
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})