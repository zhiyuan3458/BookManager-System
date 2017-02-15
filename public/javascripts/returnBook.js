$(document).ready(function(){
    // //当输入书籍编号还书时
    //      $('form').validate({
    //     errorElement:"span",
    //     rules:{
    //     	bookNo:{
    //     		required:true,
    //     		remote:{
    //     			url:'/returnBook',
    //     			type:'post',
    //     			dataType:'json',
    //     			data:{
    //     				type:"checkBookNo",
    //     				bookNo:function(){
    //     					return $("input[name='bookNo']").val();
    //     				},
    //     			},
    //     			dataFilter:function(data,type){
    //                     if(data == 'true'){
    //                       return true;
    //                     }else{
    //                       return false;
    //                     }
    //     			}
    //     		}
    //     	},
    //     },
        
    //     messages:{
    //        bookNo:{
    //        	  required:'书籍编号不能为空！',
    //        	  remote:'书籍没有被借出或书籍编号不存在！',
    //        },
    //     },
    // });
     
    //当输入框获得焦点时，nav-bottom消失
    $("input[name='bookNo']").focus(function(){
       location.href = 'returnBook';
    });

    // //当按下确认键提交还书编号时
    // $("button[name='confirm']").click(function(event){
    //        var event = event || window.event;
    //        event.preventDefault();
    //        setTimeout(function(){
    //           if($('form').valid()){
    //               $.ajax({
    //                 url:'/returnBook',
    //                 data:{
    //                   bookNo:$("input[name='bookNo']").val(),
    //                   type:'confirm'
    //                 },
    //                 type:'post',
    //                 success:function(data,status){
    //                   var htmlText = '<div class="modal show">'+ 
    //                                     '<div class="modal-dialog">'+ 
    //                                        '<div class="modal-content">'+ 
    //                                           '<div class="modal-header">'+ 
    //                                              '<button type="button" class="close" data-dismiss="modal">'+ 
    //                                                 '<span>&times;</span>'+ 
    //                                               '</button>'+ 
    //                                           '</div>'+
    //                                           '<div class="modal-body">'+ 
    //                                               '<p>还书成功！5秒后返回主页...</p>'+ 
    //                                            '</div>'+ 
    //                                           '<div class="modal-footer">'+ 
    //                                             '<button type="button" onclick="location.href=\'home\';" class="btn btn-default"> 返回</button>'+
    //                                           '</div>'+ 
    //                                         '</div>'+
    //                                     '</div>'+ 
    //                                   '</div>';
    //                   $('#main-body').after(htmlText);
    //                   setTimeout(function(){
    //                      location.href = 'home?title=新书推荐&type=first';
    //                   },5000);
    //                 },
    //                 error:function(data,status){
    //                     $('#main-body').html(data);
    //                 }
    //               });
    //           }
    //        },1000);
    // });
});