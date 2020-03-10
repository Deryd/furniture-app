const path = require('path')
const express = require('express')
var Datastore = require('nedb');
var db = new Datastore({ filename: './db/furniture' });
db.loadDatabase();

let furniture = [
    {
        id: "1",
        header: "string",
        text: "string",
        image: "/public/image/arch_b-1801.jpg",
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
        image: "/public/image/arch_a-1801.jpg",
        furnitureDescription: {
            type: "chair",
            name: "Arch",
            code: "A-1801 arch",
            design: "Pawlak & Stawarski",
            littleDescription: "The ARCH chair and armchair are characterized by timeless elegance. In their form, they refer to the classics, yet thanks to simplified details they gain a modern character.",
            description: "The ARCH chair and armchair are characterized by timeless elegance. In their form, they refer to the classics, yet thanks to simplified details they gain a modern character. Strong undercuts of the base inspired by arcades suggest classic architecture. The base of each seat is digitally milled, which allows to obtain non-obvious, subtle shapes that can not be achieved by traditional woodworking methods. The backrest exposes a large area of ​​natural wood, and the use of plywood with variable thickness allows for a subtle expression of the furniture. The collection is excellent for prestigious hotels, elegant restaurants and at home."
        }
    },
    {
        id: "3",
        header: "string",
        text: "string",
        image: "/public/image/",
        furnitureDescription: {
            type: "chair",
            name: "1260",
            code: "A-1260",
            design: "",
            littleDescription: "",
            description: ""
        }
    },
    {
        id: "4",
        header: "string",
        text: "string",
        image: "/public/image/",
        furnitureDescription: {
            type: "chair",
            name: "Hips",
            code: "A-1802/1",
            design: "Pawlak & Stawarski",
            littleDescription: "A series of seats designed for contemporary restaurants and food courts, which will also fit into any contemporary home interior.",
            description: "A series of seats designed for contemporary restaurants and food courts, which will also fit into any contemporary home interior. Entirely made of variable thickness plywood, which is a combination of modern elegant design with advanced wood bending technology. The change in thickness used in the seat and in the legs of the chair adds lightness, revealing thin edges while providing a strong structure. Soft, flowing lines of the seat give it a fashionable and friendly character. The seats are available in several versions: without upholstery, upholstered seat only or completely upholstered."
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

app.get("/admin", (req, res) => {
    res.sendFile(HTML_FILE)
})

app.get("/furniture/top", (req, res) => {
    //furnitures = db.getAllData();
    res.send(furniture);
})


app.get("/furniture/list", (req, res) => {
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