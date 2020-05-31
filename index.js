const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gettingstarted', {useNewUrlParser: true});
const student = require('./model/students')

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const st = express.Router()


 st
    .get('/v1', (req,res) => {
        student.find({}, (err, data) => {
            if(err) {
                return console.log(err)
            }
            console.log(data)
            return res.send(data)
        })
    })
    .post('/v1', (req,res) =>{
        console.log(req.body)
        const param = req.body
        const insert = new student(param)
        insert.save()
        res.status(201)
        res.send('created')
    })
    .put('/v1', (req,res) => {
        console.log(req.body.lastName)
        const param = req.body.lastName
        student.findOneAndUpdate({name:'bravo'}, {lastName:param}, (err, data) => {
        res.status(201)
        res.send('updated')
    })
})  
    .delete('/v1', (req,res) => {
        const variable  = req.body.name
        student.findOneAndRemove({name:variable}, (err, data) => {
        res.status(201)
        res.send('deleted')
    })

})
.get('/v1/:query', (req,res) => {

    const q = {
        name : req.params.query
    }

    student.find( q, (err, data) => {
    res.status(200)
    res.json(data)
})

})








app.use('/api', st )

app.use('/',(req, res) => {
    res.send({key:"value2"})
})

app.listen(3130, (err) =>{
    if(err)
        console.log(err)
    console.log(`connected port ${3131}`)
})