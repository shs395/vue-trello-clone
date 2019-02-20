var express = require('express');
var router = express.Router();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoClient.connect("mongodb://localhost:27017",
  {useNewUrlParser:true},(err,client)=>{
    if(!err){
      console.log("MongoDb Connected")
    }
    const db = client.db("vue-trello-clone")
    const lists = db.collection('lists')
    // res.sendFile(path.join(__dirname, '../public', 'index.html'))
    var html = `
    <html><head></head><body><p>helloworld</p></body></html>
    `
    res.send(html)
  })
});

module.exports = router;
