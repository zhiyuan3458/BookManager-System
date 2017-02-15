var mysql = require('mysql');
function getConnection(){
	var client = mysql.createConnection({
          host:'localhost',
          user:'root',
          password:'LZY83326040',
          database:'library',
          port:3306
	});
	return client;
}

function select(client,sql,callback){
    client.query(sql,function(error,result,field){
    	if(error) throw error;
    	client.end(function(){
            callback(result);
    	});
    });
}

function insert(client,sql,array,callback){
    client.query(sql,array,function(error,result){
    	if(error) throw error;
        client.end(function(){
            callback(error,result);
        });
    });
}

function update(sql,array){
   var client = getConnection();
   client.query(sql,array,function(err,result){
        if(err) throw err;
        client.end();
   });
}

function deleteData(sql){
  var client = getConnection();
  client.query(sql,function(err,result){
      if(err) throw err;
      client.end();
  });
}

module.exports = {getConnection,select,insert,update,deleteData};
  