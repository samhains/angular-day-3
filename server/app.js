var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
module.exports = app;

var publicPath = path.join(__dirname, '../public');
var indexHtmlPath = path.join(__dirname, '../index.html');

var FlashCardModel = require('./models/flash-card-model');

app.use(express.static(publicPath));

// body parsing (if the http request has a body, make it a req.body object)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});

app.post('/cards',function(req,res){
    console.log(req.body);
    var card = req.body;

    FlashCardModel.create(card, function(err, card){
        console.log("dB sending..."+card);
        res.send(card);
    });
});

app.put('/cards/:flashCardId',function(err,card){
    
});

app.get('/cards', function (req, res) {


    var modelParams = {};

    if (req.query.category) {
    	modelParams.category = req.query.category;
    }

    FlashCardModel.find(modelParams, function (err, cards) {
        setTimeout(function () {
            res.send(cards);
        }, Math.random() * 1000);
    });

});