// 实现登陆功能
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');//解析req.body
var multer = require('multer');  //解析form的文本域与文件上传
var userDao = require('../dao/userDao/userDao');
var database = require('../dao/database/database');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));
var upload = multer();
var book = require('../dao/bookDao/book');
var crypto = require('crypto');

//通过get方式获得index.html
router.get('/', function(req, res) {
// 　　res.render('index',{title:'index'});
       if(req.cookies && req.cookies.user !== undefined){
               res.redirect("home?title=新书推荐&type=first"); //收到前台的location.href为home时执行
       }else{
          res.locals.message = req.session.message;
          res.render('index',{title:'index'});
       }
});
//在index.html中post数据，upload.array()用于上传表单文本域
router.post('/',upload.array(),function(req,res,next){
    var hash = crypto.createHash("md5");
    hash.update(req.body.password);
    var password = hash.digest("hex");
 	  var user = {username:req.body.username,password:password};
    var checked = req.body.checked;
    if(user.username == '' || user.password == ''){
        req.session.message = '<div style="position:fixed;top:0;color:red;width:100%;">账号或密码不能为空！</div>';
        res.sendStatus(404);
    }else{
        var client = database.getConnection();
        var sql = 'select password from users where username="'
                 +user.username+'"';
                 database.select(client,sql,function(results){
                   if(results[0]){
                       if(results[0].password == user.password){
                          if(checked){
                               res.cookie("user",user,{httpOnly:true,maxAge:1000*60*60*24*30});   //1000*60*60*24*30
                          }
                        req.session.user = user;
                        res.sendStatus(200);
                       }else{
                        req.session.message = '<div style="position:fixed;top:0;color:red;width:100%;">密码输入错误，请重新输入！</div>';
                        res.sendStatus(404);
                       }
                   }else{
                    req.session.message = '<div style="position:fixed;top:0;color:red;width:100%;">用户名不存在！</div>';;
                    res.sendStatus(404);
                   }
                 });
    }
 	  
});

module.exports = router;