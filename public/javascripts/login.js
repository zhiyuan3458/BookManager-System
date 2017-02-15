$(document).ready(function(){
      // //点击账号和密码输入框时
      // $("input[name='username']").focus(function(){
      //      setTimeout(function(){alert($(document).innerHeight());
      //         if($(window).height() !== $(document).height()){
      //              $("#login").css("marginTop","10%");
      //         }
      //       },800);
      //             // setTimeout(function(){
      //                 // alert($(window).height());
      //             // },3000);
      //             // $("#login").css("marginTop","10%");
            
      // });

      // $("input[name='password']").focus(function(){
      //     $("#login").css("marginTop","80%");
      // });

      // //离开输入框时
      // $("input[name='username']").blur(function(){
      //     $('#login').css("marginTop","-60%");
      // });

      // $("input[name='password']").blur(function(){
      //     $('#login').css("marginTop","0");
      // });

      //按下登陆按钮时
      $("button[name='login']").click(function(event){
            var checked = false;
            if($("input[type='checkbox']").get(0).checked){
               checked = true;
            }
            var event = window.event || event;
            event.preventDefault();
            var username = document.getElementsByName('username')[0].value;
            var password = document.getElementsByName('password')[0].value;
            var data = {username:username,password:password,checked:checked};
            $.ajax({
                 url:'/',
                  data:data,
                  type:'POST',
                  success:function(data,status){
                      if(status == 'success'){
                              //定向到home页面
                            location.href = "home?title=新书推荐&type=first";
                      }
                  },
                error:function(data,status){
                      if(status == 'error'){
                            //定向回index.html
                            location.href = '/';
                      }
                  }
                });
      });

});