$(document).ready(function(){
    $('form').validate({
    	errorElement:"span",
    	rules:{
          bookNo:{
          	required:true,
          	remote:{
          		url:'/detail',
          		data:{
          			bookNo:function(){
          				return $("input[name='bookNo']").val();
          			},
          			type:'isSave',
          		},
          		type:'POST',
                dataType: "json", 
                dataFilter:function(data,type){
                      return data;
                }
          	}
          }
    	},
    	messages:{
           bookNo:{
           	  required:'请输入书籍编号！',
           	  remote:'书籍编号不存在或书本已被借出！',
           }
    	},
    });

    //按下确认键提交数据，转到confirmMessage页面
      $("button[name='submit']").click(function(event){
          var event = event || window.event;
          event.preventDefault();
          setTimeout(function(){
            if($('form').valid()){  
             $.ajax({
               url:'/detail',
               type:'post',
               data:{
                  bookNo:$("input[name='bookNo']").val(),
               },
               success:function(data,status){
                 if(status == 'success'){
                       location.href = 'confirmMessage?bookNo='+data;
                 }
               },
               error:function(){
                  if(status == 'error'){
                      location.href = 'home';
                  }
                }
            });
          }else{
            return false;
          }
          },1000);
      });

	$(".head span").click(function(){
		 window.history.back();
  });

	// $("button[name='submit']").click(function(){
	// 	 var bookNo = $("input[name='bookNo']").val();
	// 	 $.ajax({
	// 	 	url:'/detail',
	// 	 	data:bookNo,
	// 	 	type:'POST',
	// 	 	success:function(data,status){
	// 	 	   if(status == 'success'){
	// 	 	   	   location.href = 'confirmMessage';
	// 	 	   }
	// 	 	},
	// 	 	error:function(){
		 		
	// 	 	}
	// 	 });
	// });
});