var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');
var multer = require('multer');  //解析form的文本域与文件上传 
var upload = multer(); 
var database = require('../dao/database/database');
var book = require('../dao/bookDao/book');
var collection = require("../dao/collectionDao/collection");

router.get('/',function(req,res){
   var query = url.parse(req.url).query;
   var bookId = querystring.parse(query)['bookId'];
   
   book.showBook(bookId,'',function(data){
          res.render('detail',{bookData:data});
   });
});

router.post('/',upload.array(),function(req,res){
   var user = req.session.user || req.cookies.user;
   var username = user.username;
   var bookName = req.body.bookName || '';
	 var bookNo = req.body.bookNo;
	 var type = req.body.type || '';
	 var client = database.getConnection();
	 if(type == 'isSave'){
         var client = database.getConnection();
         var sql = 'select book_detail_id,isInLibrary from bookdetail where bookNo=' + bookNo;
         database.select(client,sql,function(result){
             if(result[0] !== undefined){
                  if(result[0].isInLibrary == 1){
                  	  res.send(true);
                  }else{
                  	  res.send(false);
                  }
             }else{
                  res.send(false);
             }
        });
	 }else if(type == "collect"){
      collection.collectBook(bookName,username,function(bool){
          res.status(200).send(bool);
      });
   }else if(type == "check"){
      collection.checkCollection(bookName,username,function(data){
           res.status(200).send(data);
      });
   }else{
        res.status(200).send(bookNo);
	 }
});

module.exports = router;