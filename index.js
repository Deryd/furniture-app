const path = require('path')
const express = require('express')
var Datastore = require('nedb');
var db = new Datastore({filename : './db/furniture'});
db.loadDatabase();

let furniture = [
    {
        id: "1",
        header: "string",
        text: "string",
        furnitureDescription: {
          type: "armchair",
          name: "Arch",
          code: "B-1801",
          design: "Pawlak & Stawarski",
          littleDescription: "The ARCH chair and armchair are characterized by timeless elegance.",
          description: "The ARCH chair and armchair are characterized by timeless elegance. In their form, they refer to the classics, yet thanks to simplified details they gain a modern character. Strong undercuts of the base inspired by arcades suggest classic architecture. The base of each seat is digitally milled, which allows to obtain non-obvious, subtle shapes that can not be achieved by traditional woodworking methods. The backrest exposes a large area of ​​natural wood, and the use of plywood with variable thickness allows for a subtle expression of the furniture. The collection is excellent for prestigious hotels, elegant restaurants and at home."
        }
      },
      {
        id: "2",
        header: "string",
        text: "string",
        furnitureDescription: {
          type: "chair",
          name: "Arch",
          code: "A-1801 arch",
          design: "Pawlak & Stawarski",
          littleDescription: "The ARCH chair and armchair are characterized by timeless elegance. In their form, they refer to the classics, yet thanks to simplified details they gain a modern character.",
          description: "The ARCH chair and armchair are characterized by timeless elegance. In their form, they refer to the classics, yet thanks to simplified details they gain a modern character. Strong undercuts of the base inspired by arcades suggest classic architecture. The base of each seat is digitally milled, which allows to obtain non-obvious, subtle shapes that can not be achieved by traditional woodworking methods. The backrest exposes a large area of ​​natural wood, and the use of plywood with variable thickness allows for a subtle expression of the furniture. The collection is excellent for prestigious hotels, elegant restaurants and at home."
        }
      }
];

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, './index.html')

app.use(express.static(DIST_DIR))

app.get("/", (req, res) => {
    res.sendFile(HTML_FILE)
})

app.get("/furniture", (req, res) => {
    //furnitures = db.getAllData();
    res.send(furniture);
})

app.put("/furniture/add", (req, res) => {
    res.send(req);
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})