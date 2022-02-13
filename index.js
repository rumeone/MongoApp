const express = require('express');
const mongoose = require('mongoose');
const expressHandlebars = require('express-handlebars');
const PORT = process.env.PORT || 3000;

const app = express();
const hbs = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

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
};



start();