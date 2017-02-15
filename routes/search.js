var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');
var book = require('../dao/bookDao/book');

router.get('/',function(req,res){
    var query = url.parse(req.url).query;
    var type = querystring.parse(query)['type'] || '';
    
    if(type == 'getBookName'){
         book.getBookNamesBySearch(function(data){
                res.status(200).send(data);
         }); 
    }else{
    	res.render('search',{title:'search'});
    }
});

module.exports = router;