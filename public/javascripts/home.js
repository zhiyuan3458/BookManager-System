$(document).ready(function(){
	//焦点对准搜索框时，下面的listView与nav-bottom消失
    $("input[name='search']").focus(function(){
    	 location.href = 'search';
    });

    //搜索框失去焦点后，listView与nav-bottom出现
    $("input[name='search']").blur(function(){
        $('#listView').css('display','');
    });

    var navBottomHeight = $('#nav-bottom').height();
    $('#listView').css('marginBottom',navBottomHeight);

    //当按下还书键时
    $('.send').click(function(event){
    	var event = window.event || event;
    	event.preventDefault();
    	$.ajax({
    		url:'/home',
    		data:{href:$("#nav-bottom a:eq(1)").attr("href")},
    		type:'post',
            success:function(data,status){
            	if(status == 'success'){
                    $("#main-body").html(data);
            		var script = document.createElement("script");
            		script.src = "javascripts/returnBook.js";
            		document.getElementsByTagName("head")[0].appendChild(script);
            		window.history.replaceState(
            			{
                           title:'returnBook'
            		   	},'','returnBook'
            		);
                    $('title').html('returnBook');
            		$(".home,.person").css('color','white');
            		$(".send").css('color','#C60000');
            	}
            }
    	});
    });
    
    //点击nav栏时
    $("#title .nav").click(function(event){
        var event = event || window.event;
        event.preventDefault();
        var target = event.target || event.srcElement;
        $("#title .nav li").removeClass("active");
        if(target.nodeName.toLowerCase() == 'a'){
            switch(target.innerHTML){
                case '新书推荐':{$("#title .nav li:eq(0)").addClass("active");submitAjaxNav(target.innerHTML);break;}
                case '理工':{$("#title .nav li:eq(1)").addClass("active");submitAjaxNav('理工');break;}
                case '经济':{$("#title .nav li:eq(2)").addClass("active");submitAjaxNav('经济');break;}
                case '哲学':{$("#title .nav li:eq(3)").addClass("active");submitAjaxNav('哲学');break;}
                case '文学':{$("#title .nav li:eq(4)").addClass("active");submitAjaxNav('文学');break;}
                default:break;
            }
        }
    });

    window.onpopstate = function() {
        var state = window.history.state;
        $("#listView").html(state.html1);
        window.history.replaceState && window.history.replaceState(state, state.title, state.url);
    };


    function submitAjaxNav(title){
        $.ajax({
            url:'/home',
            data:{
                title:title,
            },
            type:'get',
            success:function(data,status){
               if(status == 'success'){
                   $('title').text(data.title);
                   var bookObject = data.data;
                   var html = '';
                   if(bookObject !== 'wrong'){
                       bookObject.forEach(function(values){
                          html += '<a href="detail?bookId='+values.bookId+'">'+
                                    '<div class="listView-item">'+
                                       '<div class="listView-item-content">'+      
                                         '<img src="img/'+values.bookPic+'" style="width: 4.5rem;height: 5rem;">'+ 
                                             '<ul>'+
                                                 '<li>'+values.bookName+'</li>'+
                                                 '<li>作者：'+values.author+'</li>'+
                                              '</ul>'+
                                            '</div>'+
                                            '<div>剩余量：'+values.bookNum+'</div>'+
                                          '</div></a>';
                       });
                       html += '<div class="listView-item">没有更多了...</div>';
                       var state = {html1:html,title:data.title,url:'/home?title='+data.title};
                       window.history.pushState(state,state.title,state.url);
                   }else{
                       html += '<div style="background: white;">pages is '+data+'</div>';
                   }
                   $("#listView").html(html);
               }
            },
            error:function(err,status){

            }
        });
    }
});