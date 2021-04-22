const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const Contact = require('./models/phonebook');

app.use(express.json());
app.use(express.static('build'));

morgan.token('body', function (req, res) {
    if (req.method === "POST")
        return JSON.stringify(req.body);
    return "";
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(cors());

// Route for API info
app.get("/info", (req, res) => {
    Contact.find({}).then(response => {
        const reqDate = new Date();
        res.send(`<p>Phonebook has info for ${response.length} people</p>
        <p>${reqDate}</p>
        `);
    });
});

// Route to get all contacts
app.get('/api/persons', (req, res) => {
    Contact.find({}).then(response => {
        console.log(JSON.stringify(response));
        res.json(response);
    });
});

// Route to get one contact
app.get("/api/persons/:id", (req, res, next) => {
    Contact.findById(req.params.id).then(person => {
        if (person) {
            res.json(person);
        } else {
            res.status(404).end();
        }
    }).catch(error => next(error));
});

// route to delete a contact
app.delete("/api/persons/:id", (req, res, next) => {
    const id = req.params.id;
    Contact.findByIdAndRemove(id).then(response => {
        res.status(204).end();
    }).catch(error => next(error));
});

// Route to post a contact
app.post('/api/persons', (req, res) => {
    const body = req.body;
    if (!(body.name && body.number)) {
        return res.status(400).json({
            error: "Content missing"
        });
    }
    const person = new Contact({
        name: body.name,
        number: body.number
    });
    person.save().then(response => {
        console.log(`${response.name} successfully saved to phonebook`);
        res.json(person);
    }).catch(error => {
        console.log("Error in saving person", error);
    });
});

// Route to update a contact
app.put('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    if (!(body.name && body.number)) {
        return res.status(400).json({
            error: "Content missing"
        });
    }
    const newPerson = {
        name: body.name,
        number: body.number
    };
    Contact.findByIdAndUpdate(id, newPerson, { new: true })
        .then(updatedPerson => {
            res.json(updatedPerson);
        })
        .catch(error => next(error));
});

// Error handlers
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
};

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
    console.log(error.message);
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' });
    }
    next(error);
};

// handler of requests with cast error
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});