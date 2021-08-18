const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const { nanoid } = require('nanoid')
const app = express()
const port = 3000;

const {MongoClient} = require('mongodb');

require('./utils/db2')
const loginSchema = require('./schemas/login-schema')

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Mongo Contact App \ Listening at http://localhost:${port}`);
})

app.set('view engine', 'ejs');

app.get('/signup', (req, res) => {
    res.render('signup', { 
        nama: 'Jeremy Sulle', 
        title: 'Halaman Sign Up',
    })   
})

app.post('/signup', async(req, res) => {
    let newUser = new loginSchema({
        username: req.body.username,
        password: req.body.password,
    })

    newUser.save()

    res.redirect('/signin')
})

app.get('/signin', (req, res) => {
    res.render('signup', { 
        nama: 'Jeremy Sulle', 
        title: 'Halaman Sign In',
    })   
})

