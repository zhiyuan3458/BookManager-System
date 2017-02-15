//当按下登陆页面的注册键时，发送注册请求到这里，返回注册页面
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');//解析req.body
var multer = require('multer');  //解析form的文本域与文件上传 
var userDao = require('../dao/userDao/userDao');
var upload = multer();

router.get('/',function(req,res){
  res.render('regist',{title:'regist'});
});

router.post('/',upload.array(),function(req,res){
    if(req.body.type == 'checkUsername'){
        userDao.registRemote(req,res);
    }else{
    	userDao.registPost(req,res);
    }
});

module.exports = router;