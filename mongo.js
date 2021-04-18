const mongoose = require('mongoose');

if (process.argv.length < 3) {
    console.log('Please provide the password, contact name and number, as arguments: node mongo.js <password> <name> <number>');
    process.exit(1);
}

const password = process.argv[2];
const contactName = process.argv[3];
const contactNumber = process.argv[4];

const url = `mongodb+srv://sid:${password}@fullstackopen.msbpa.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

const contactSchema = new mongoose.Schema({
    contactName: String,
    contactNumber: String
});

const Contact = mongoose.model("Contact", contactSchema);


if (!contactNumber && password) {
    Contact.find({}).then(result => {
        result.forEach(contact => {
            console.log(contact.contactName + " " + contact.contactNumber);
        });
        mongoose.connection.close();
        process.exit(1);
    });
} else {
    const newContact = new Contact({
        contactName,
        contactNumber
    });

    console.log({ newContact });

    newContact.save().then(resp => {
        console.log(`Added ${contactName} number ${contactNumber} to phonebook`);
        mongoose.connection.close();
    });
}