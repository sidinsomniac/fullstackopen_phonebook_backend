require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;
const name = "Siddheshwar";
const number = "1097-123-124";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

const contactSchema = new mongoose.Schema({
    name: String,
    number: String
});

contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model("Contact", contactSchema);
