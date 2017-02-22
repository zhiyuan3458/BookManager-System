var express = require('express');
var router = express.Router();
var book = require('../dao/bookDao/book');
var url = require('url');
var querystring = require('querystring');

router.get('/',function(req,res){
       var query = url.parse(req.url).query;
       var title = querystring.parse(query)['title'] || '';
       var type = querystring.parse(query)['type'] || '';
       if(title !== '' && type !== 'first'){
           switch(title){
             case '新书推荐':{book.showBook(0,title,function(data){
                 res.status(200).send({title:'新书推荐',data:data});  
             });break;}
             case '理工':{book.showBook(0,title,function(data){
                 // res.render('home',{title:'理工',data:data});
                    res.status(200).send({title:'理工',data:data});
             });break;}
             case '经济':{book.showBook(0,title,function(data){
                   res.status(200).send({title:'经济',data:data});
             });break;}
             case '哲学':{book.showBook(0,title,function(data){
                   res.status(200).send({title:'哲学',data:data});
             });break;}
             case '文学':{book.showBook(0,title,function(data){
                   res.status(200).send({title:'文学',data:data});
             });break;}
             default:{break;}
           }
       }else if(title !== '' && type == 'first'){
             if(req.session.user !== undefined ||req.cookies.user !==undefined){  // ||req.cookies.user !==undefined
                book.showBook(0,title,function(data){
                   res.render('home',{title:'新书推荐',data:data});  
                });
           }else{
              req.session.message = '<div style="position:fixed;top:0;color:red;width:100%;">请先登陆！</div>';
              res.redirect('/');  //默认302重定向，暂时性转移
           }
       }else{
           // book.showBook(0,title,function(data){
           //       res.render('home',{title:'新书推荐',data:data});  
           //   });
       }
       // if(req.session.user){
       	// var data = [];
       	// var client = database.getConnection();
       	// sql = 'select book_name,author,book_num,book_pic from book';

        // database.select(client,sql,function(result){
        //      if(result[0] !== undefined){
        //      	for(var i = 0;i < result.length;i++){
        //              var book = new Object();
        //              book.bookName = result[i].book_name;
        //              book.author = result[i].author;
        //              book.bookNum = result[i].book_num;
        //              book.bookPic = result[i].book_pic;
        //              data.push(book);
        //      	}
                // book.showBook(0,'',function(data){
                // 	res.render('home',{title:'home',data:data}); //收到前台的location.href为home时执行
                // });
             	
             // }else{
             //    console.log('wrong');
             // }
        //});
        
       // }else{
       // 	req.session.error = '请先登陆';
       // 	res.redirect('/');  //默认302重定向，暂时性转移
       // }
});

router.post('/',function(req,res){
    var href = req.body.href;
    if(href == 'returnBook'){
        res.status(200).send( '<div style="position:absolute;width:100%;top:0;"><form><div class="form-group">'+
                              '<label class="text-info">书本编号：</label>'+         
                              '<input type="text" name="bookNo" class="form-control" onkeyup="this.value=this.value.replace(/\\D/g,\'\')" onafterpaste="this.value=this.value.replace(/\\D/g,\'\')" placeholder="请输入书本编号" /><br><br>'+
                              '<button class="btn btn-info btn-block" name="confirm">确定</button>'+
                              '</div></form></div>'
        );
    }else{

    }
});

module.exports = router;