var database = require('../database/database');

function showMessageDetail(bookNo,user,callback){
    var nowDate = new Date();
    var returnDate = new Date(nowDate.getTime() + 2505600000);
    var client = database.getConnection();
    var sql = 'select book_name from bookdetail where bookNo='+bookNo;
    database.select(client,sql,function(result){
        if(result[0] !== undefined){
            var detail = new Object();
            detail.bookNo = bookNo;
            detail.bookName = result[0].book_name;
            detail.nowDate = nowDate.toLocaleDateString();
            detail.returnDate = returnDate.toLocaleDateString();
            detail.username = user.username;
            callback(detail);
        }
    });
}

function saveDetailInBookDetail(detail,callback){
    var bookNo = Number(detail.bookNo);
    var bookName = detail.bookName;
    var username = detail.username;
    var nowDate = detail.nowDate;
    var returnDate = detail.returnDate;

    var client = database.getConnection();
    var sql = 'insert into orders(order_id,user_name,book_name,book_no,now_date,return_date) values(?,?,?,?,?,?)';
    database.insert(client,sql,[,username,bookName,bookNo,nowDate,returnDate],function(error,results){
           if(results){
               callback();
           }      
      });
}

function deleteOrderDetail(bookNo,user,callback){
    var client = database.getConnection();
    var sql = 'select user_name from orders where book_no='+bookNo;console.log(sql);
    database.select(client,sql,function(result){
        if(result[0] !== undefined){
            if(result[0].user_name == user.username){
                var sql = 'delete from orders where book_no='+bookNo;
                database.deleteData(sql);
                sql = 'update bookdetail set isInLibrary=1 where bookNo=?';
                database.update(sql,[bookNo]);
                callback(true);
            }
        }else{
            var message = 'your operation is wrong!';
            callback(message);
        }
    });
}

module.exports = {showMessageDetail,saveDetailInBookDetail,deleteOrderDetail};