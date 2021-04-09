const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(express.static('build'));

morgan.token('body', function (req, res) {
    if (req.method === "POST")
        return JSON.stringify(req.body);
    return "";
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(cors());

let people = [
    {
        "name": "Omaewa Shindeiru",
        "number": "234-2353-1415",
        "id": 1243
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 7564
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 2347
    },
    {
        "name": "Artsy Hekas",
        "number": "45-2352-3523",
        "id": 300
    },
    {
        "name": "Zha Warudo",
        "number": "123-53452-124115",
        "id": 9786
    }
];

app.get('/', (req, res) => {
    res.send("<h1>Hello world</h1>");
});

app.get("/info", (req, res) => {
    const reqDate = new Date();
    res.send(`<p>Phonebook has info for ${people.length} people</p>
    <p>${reqDate}</p>
    `);
});

app.get('/api/persons', (req, res) => {
    res.json(people);
});

app.get("/api/persons/:id", (req, res) => {
    const id = +req.params.id;
    const person = people.find(person => person.id === id);
    if (person) {
        res.json(person);
    } else {
        res.status(404).end();
    }
});

app.delete("/api/persons/:id", (req, res) => {
    const id = +req.params.id;
    people = people.filter(person => person.id !== id);
    res.status(204).end();
});

app.post('/api/persons', (req, res) => {
    const body = req.body;
    const isNamePresent = people.find(person => person.name.toLowerCase().trim() === body.name.toLowerCase().trim());
    if (!(body.name && body.number)) {
        return res.status(400).json({
            error: "Content missing"
        });
    } else if (isNamePresent) {
        return res.status(409).json({
            error: 'name must be unique'
        });
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateNewId()
    };

    people = people.concat(person);
    res.json(person);
});

const generateNewId = () => {
    return Math.round(Math.random() * 9999);
};

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});