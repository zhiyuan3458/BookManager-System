//在登录页面中填写完相关信息后，按confirm键post到服务器
$(document).ready(function(){
     //注册用户验证
     $('form').validate({
         errorElement: "span",
        rules:{
          username:{
            required:true,
            rangelength:[11,11],
            checkUsername:true,
            remote:{
              url:'/regist',
              type:'POST',
              dataType: "json", 
              data:{
                username:function() {
                  return $("input[name='username']").val();   
                },
                type:function(){
                    return 'checkUsername';
                },
              },
              dataFilter:function(data,type){
                  if(data == 'true'){
                    return true;
                  }else{
                    return false;
                  }
              }
            }
          },
          password:{
            required:true,
            minlength:8,
            maxlength:20,
          },
          repassword:{
            required:true,
            equalTo:'#password',
          },
        },

        messages:{
          username:{
            required:'用户名不能为空！',
            rangelength:'用户名必须为11位学号！',
            remote:'用户名已存在！',
          },
          password:{
            required:'密码不能为空！',
            minlength:'密码长度少于8',
            maxlength:'密码长度大于20',
          },
          repassword:{
            required:'确认密码不能为空！',
            equalTo:'确认密码与密码不一致！',
          },
        },
        focusInvalid:true,
     });	
  
     $.validator.addMethod("checkUsername",function(value,element,params){  
            var checkUsername = /^\w{2,11}$/g;  
            return this.optional(element)||(checkUsername.test(value));  
        },"请输入正确的学号！");   

     //按下注册键后注册
      $("button[name='confirm']").click(function(event){
          var event = event || window.event;
          event.preventDefault();
          if($('form').valid()){
             $.ajax({
               url:'/regist',
               type:'post',
               data:{
                  username:$("input[name='username']").val(),
                  password:$("input[name='password']").val(),
               },
               success:function(data,status){
                  if(status == "success"){
                      location.href = '/';
                  }
                },
               error:function(){
                  if(status == 'error'){
                      location.href = 'index';
                  }
                }
            });
          }else{
            return false;
          }
      });
});