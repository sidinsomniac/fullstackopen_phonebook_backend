const express = require('express');
const app = express();

let people = [
    {
        "name": "Omaewa Shindeiru",
        "number": "234-2353-1415",
        "id": 0
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 1
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 2
    },
    {
        "name": "Artsy Hekas",
        "number": "45-2352-3523",
        "id": 3
    },
    {
        "name": "Zha Warudo",
        "number": "123-53452-124115",
        "id": 4
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

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});