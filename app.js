const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000;

const {MongoClient} = require('mongodb');
app.use(expressLayouts)

require('./utils/db')

const {generate} = require('./utils/generatorID')
const userSchema = require('./schemas/user-schema')

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Mongo Contact App \ Listening at http://localhost:${port}`);
})

function findKey(){
    const key = generate(5);
    const iKey = userSchema.findOne({ key: key})

    if(iKey){
        return key
    }else{
        findKey()
    }
}

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {     
        nama: 'Jeremy Sulle', 
        title: 'Halaman Home',
        layout: 'layouts/main-layout.ejs',
        shortUrl: null,
    })   
})

app.post('/', async(req, res) => {

    const nKey = findKey();

    let newUser = new userSchema({
        url: req.body.url,
        key: nKey,
    })

    newUser.save()

    // res.redirect('/')
    res.render('home',{
        title: 'Halaman Home',
        layout: 'layouts/main-layout.ejs',
        shortUrl: newUser.key,
    })
})

app.get('/:key', async(req, res) => {
    const findLinks = await userSchema.findOne({ key: req.params.key})
    if(findLinks == null) return res.sendStatus(404)

    res.status(301).redirect(findLinks.url)
})

