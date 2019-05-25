var mongojs = require('mongojs')
var db = mongojs('mongodb://bhanuprakashnani:rajeswari12345@cluster0-shard-00-00-eivd1.mongodb.net:27017/project1?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['codinza'])


const express = require('express');
var fs = require('fs');

var app = express()
app.use(express.static('public'))
//app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.send('Hello World')
    //res.render('bhanu')
})

app.listen(4000, function(){
    console.log("Server is running");
})

app.get('/signup', function(req, res) {

    console.log(__dirname)
    res.sendFile(__dirname + '/index2.html')

})



// app.get('/profile/:xyz', function (req, res) {
//     var a = {
//         name: req.params.xyz
//     }
//
//     db.codinza.find(a, function(err, data){
//         if(data.length == 0){
//             db.codinza.insert(a, function(err){
//                 if(err){
//                     console.log(err)
//                 }
//                 else{
//                     res.send("Inserted into Database")
//                 }
//             })
//         }
//         else{
//             res.send("Already recorded")
//         }
//     })
// })

app.get('/loginsubmit', function(req, res){
    var l = {
        l1: req.query.username,
        l2: req.query.password,
        l3: req.query.loginkeeping
    }
})

app.get('/signupsubmit', function(req, res){

    var signup = {
        username: req.query.usernamesignup,
        email: req.query.emailsignup
    }

    db.codinza.find(signup, function(err, data){

        if(data.length == 0)
        {
            db.codinza.insert(signup, function(err){
                if(err)
                {
                    console.log(err)
                }
                else
                {
                    res.send("Inserted into database")
                }
            })
        }
        else{
            res.send("Already Registered")
        }
    })
})