var database = require('../database/database');
var bodyParser = require('body-parser');//解析req.body
var multer = require('multer');  //解析form的文本域与文件上传 
var session = require('express-session');
    //处理判断用户名是否存在的函数
var registRemote = function(req,res){
      var username = req.body.username.toString();
      var client = database.getConnection();
      var sql = 'select username from users where username="'
      +username+'"';
      database.select(client,sql,function(results){
      	  if(results[0] === undefined){
      	  	res.send("true");
      	  }else{
      	  	res.send("false");
      	  }
      });
};
   //按下注册键后注册
var registPost = function(req,res){
      var username = req.body.username;
      var password = req.body.password;
      var sql = 'insert into users(user_id,username,password) values(?,?,?)';
      var client = database.getConnection();
      database.insert(client,sql,[,username,password],function(error,results){
      	   if(results){
               res.sendStatus(200);
      	   }  	  
      });
};

module.exports = {registRemote,registPost};