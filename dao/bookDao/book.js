var bodyParser = require('body-parser');//解析req.body
var database = require('../database/database');

function showBook(bookId,title,callback){
        var bookId = bookId || '';
        var client = database.getConnection();
        var sql = '';

        if(bookId){
             sql = 'select * from book where id='+bookId;
             database.select(client,sql,function(result){
                 if(result[0] !== undefined){
                     var book = new Object();
                     book.bookName = result[0].book_name;
                     book.publicer = result[0].publicer;
                     book.author = result[0].author;
                     book.bookNum = result[0].book_num;
                     book.bookPic = result[0].book_pic;
                     book.type = result[0].type;
                     callback(book);
                 }else{
                     message = 'wrong';
                     callback(message);
                 }
             });
        }else{ 
            sql = title == '新书推荐'? 'select id,book_name,book_num,author,book_pic from book':
            'select id,book_name,book_num,author,book_pic from book where type= \"'+title+'\"';
            var data = [];
        database.select(client,sql,function(result){
             if(result[0] !== undefined){
                for(var i = 0;i < result.length;i++){
                     var book = new Object();
                     book.bookId = result[i].id;
                     book.bookName = result[i].book_name;
                     book.author = result[i].author;
                     book.bookNum = result[i].book_num;
                     book.bookPic = result[i].book_pic;
                     data.push(book);
                }
                callback(data);
              }else{
                message = 'wrong';
                callback(message);
              }
        });
        }      
}

function getBookNamesBySearch(callback){
    var client = database.getConnection();
    var sql = "select id,book_name from book";
    database.select(client,sql,function(result){
        if(result[0] !== undefined){
            var data = [];
            result.forEach(function(value){
                var book = new Object();
                book.bookId = value.id;
                book.bookName = value.book_name;
                data.push(book);
            });
            callback(data);
        }
    });
}

function updateIsInLibraryToZero(bookNo){
    var sql = 'update bookdetail set isInLibrary=0 where bookNo=?';
    database.update(sql,[bookNo]);
}

module.exports = {showBook,updateIsInLibraryToZero,getBookNamesBySearch};