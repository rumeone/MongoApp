const express = require('express');
const mongoose = require('mongoose');
const expressHandlebars = require('express-handlebars');
const PORT = process.env.PORT || 3000;
const todoRoutes = require('./routes/todos')

const app = express();
const hbs = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(todoRoutes);

async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://root:root@cluster0.myinv.mongodb.net/todos');
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch (e) {
        console.log(e)
    }
}



start();