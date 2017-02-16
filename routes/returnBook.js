var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var database = require('../dao/database/database');
var order = require('../dao/orderDao/order');
var userDao = require('../dao/userDao/userDao');

router.get('/',function(req,res){
    res.render('returnBook',{title:'returnBook'});
});

router.post('/',function(req,res){
    var type = req.body.type;
    var bookNo = req.body.bookNo;
    var client = database.getConnection();
    if(type == 'checkBookNo'){
        var sql = 'select book_detail_id,isInLibrary from bookdetail where bookNo=' + bookNo;
        database.select(client,sql,function(result){
              if(result[0] !== undefined){
                    if(result[0].isInLibrary == 0){
                        res.send(true);
                    }else{
                res.send(false);
                    }
               }else{
                      res.send(false);
               }
        });
    }else if(type == 'confirm'){
        var user = req.cookies.user || req.session.user;
        userDao.deleteBookCount(user.username);
        order.deleteOrderDetail(bookNo,user,function(result){
              if(result == true){
                  res.sendStatus(200);
              }else{
                res.status(404).send(result);
              }
        });
    }else{
       console.log("dfsd");
    }
    
    
    
});

module.exports = router;