const express = require('express');
const app = express();
app.use(express.json());

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
    if (!(body.name && body.number)) {
        return res.status(400).json({
            error: "Content missing"
        });
    }
    const person = {
        name: body.name,
        number: body.number,
        id: generateNewId()
    };

    people = people.concat(person);
    res.json(people);
});

const generateNewId = () => {
    return Math.round(Math.random() * 9999);
};

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});