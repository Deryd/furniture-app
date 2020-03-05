const path = require('path')
const express = require('express')
var Datastore = require('nedb');
var db = new Datastore({filename : './db/furniture'});
db.loadDatabase();

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, './index.html')

app.use(express.static(DIST_DIR))

app.get("/", (req, res) => {
    res.sendFile(HTML_FILE)
})

app.get("/furniture", (req, res) => {
    let furnitures = [
        {"id": 1, "name": "Test 1"},
        {"id": 2, "name": "Test 2"},
        {"id": 3, "name": "Test 3"},
    ];
    //furnitures = db.getAllData();

    res.send(furnitures);
})

app.put("/furniture/add", (req, res) => {
    res.send(req);
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})