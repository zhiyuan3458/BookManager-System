var express = require('express');
var app = express();  //启动一个express应用
var path = require('path');  //用于加载静态文件
var bodyParser = require('body-parser');//解析req.body
var multer = require('multer');  //解析form的文本域与文件上传
var cookie = require('cookie-parser');
var favicons = require('connect-favicons');//用于获取tomcat图标，图标自己加到相应路径
var login = require('./routes/login');
var home = require('./routes/home');
var regist = require('./routes/regist');
var detail = require('./routes/detail');
var confirmMessage = require('./routes/confirmMessage');
var returnBook = require('./routes/returnBook');
var search = require("./routes/search");

var test = require('./routes/test');

app.set('views', __dirname+'/views');
 
app.set( 'view engine', 'html' );  //设置模板文件为“*.html”
app.engine( '.html', require( 'ejs' ).__express );

app.use(favicons(__dirname + '/public/img/icons'));
app.use(express.static(path.join(__dirname, '/public')));

var session = require('express-session');
app.use(session({
           secret:'secret',
           resave:false,   //设置了cookie的maxAge的话，一般为false
           saveUninitialized:true,
           cookie:{
           maxAge:1000*60*60
           }  
}));

app.use(cookie());

app.use('/',login);
app.use('/home',home);
app.use('/regist',regist);
app.use('/detail',detail);
app.use('/confirmMessage',confirmMessage);
app.use('/returnBook',returnBook);
app.use('/search',search);

app.use('/test',test);

module.exports = app;
