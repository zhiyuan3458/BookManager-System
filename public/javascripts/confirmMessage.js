$(document).ready(function(){
	$('button').click(function(event){
         var event = window.event || event;
         event.preventDefault();
         $.ajax({
         	url:'/confirmMessage',
         	data:{
              username:$("p[name='username'] span").text(),
              bookNo:$("p[name='bookNo'] span").text(),
              bookName:$("p[name='bookName'] span").text(),
              nowDate:$("p[name='nowDate'] span").text(),
              returnDate:$("p[name='returnDate'] span").text(),
         	},
         	type:'post',
         	success:function(data,status){
         	   if(status == 'success'){
                 if(data == true){
                     $('#modal1').fadeIn(1000);
                     var bool = false;
                     $('#modal1 button').click(function(event){
                          bool = true;
                          var event = event || window.event;
                          event.preventDefault();
                          location.href = 'home?title=新书推荐&type=first';
                     });
                     if(!bool){
                         setTimeout(function(){
                             location.href = 'home?title=新书推荐&type=first';
                         },5000);
                     } 
                 }else{
                     $('#modal2').fadeIn(1000);
                     var bool = false;
                     $('#modal2 button').click(function(event){
                          bool = true;
                          var event = event || window.event;
                          event.preventDefault();
                          location.href = 'home?title=新书推荐&type=first';
                     });
                     if(!bool){
                         setTimeout(function(){
                             location.href = 'home?title=新书推荐&type=first';
                         },5000);
                     } 
                 }
                    
         	   }
         	},
         	error:function(err,status){

         	}
         });
	});
});