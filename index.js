const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database');


app.set('view engine', 'ejs');
app.set('views', 'views');

// routes setup
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    // something going here.
})

app.use('/admin', adminRoutes);

mongoConnect(client => {
    console.log(client);
    app.listen(3000);
})