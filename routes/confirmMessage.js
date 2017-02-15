var express= require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');
var database = require('../dao/database/database');

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); 
var order = require('../dao/orderDao/order');
var book = require('../dao/bookDao/book');

router.get('/',function(req,res){
    var query = url.parse(req.url).query;
    var bookNo = querystring.parse(query)['bookNo'];
    var user = req.cookies.user || req.session.user;
    order.showMessageDetail(bookNo,user,function(detail){
    	res.render('confirmMessage',{detail:detail});
    });
});

router.post('/',upload.array(),function(req,res){
    var bookNo = req.body.bookNo;
    var bookName = req.body.bookName;
    var username = req.body.username;
    var nowDate = req.body.nowDate;
    var returnDate = req.body.returnDate;
    var detail = {
          bookNo:bookNo,
          bookName:bookName,
          username:username,
          nowDate:nowDate,
          returnDate:returnDate
    };
    
    book.updateIsInLibraryToZero(bookNo);

    order.saveDetailInBookDetail(detail,function(){
           res.sendStatus(200);
    });
});

module.exports = router;