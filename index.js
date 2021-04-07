const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/persons', (req, res) => {
    res.send(JSON.stringify({
        name: "Jim"
    }));
});

app.listen(3000, () => {
    console.log("Server listening on 3000");
});