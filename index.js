const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

async function start() {
    try {
    await mongoose.connect('', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    app.listen(PORT, () => {
        console.log(`Server has been listening ${PORT}.`);
    });
    } catch (error) {
        console.log(error);
    }
}

