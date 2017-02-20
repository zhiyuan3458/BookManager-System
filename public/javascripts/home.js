$(document).ready(function(){
  
	//焦点对准搜索框时，下面的listView与nav-bottom消失
    $("input[name='search']").focus(function(){
    	 location.href = 'search';
    });

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
                $('title').html('returnBook');
            		$(".home,.person").css('color','white');
            		$(".send").css('color','#C60000');
            	}
            }
    	});
    });
    
    //向左向右移动页面发生变化
      function touchAjaxNav(title,activeIndex,activeElement){
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
                    //当所有list-view-item的高度不足以使用滚动条时，禁止滚动条
                       var listViewHeight = $(window).height() - $("#title").height() - $("#search").height() - $("#nav-bottom").height();
                       var listViewItemLength = bookObject.length;
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
                       var state = {activeNav:activeIndex,html1:html,title:data.title,url:'home?title=新书推荐&type=first'};
                       window.history.pushState(state,state.title,state.url);
                   }else{
                       html += '<div style="background: white;">pages is '+data+'</div>';
                   }
                   
                   if(listViewHeight > listViewItemLength*$(".listView-item").height()){   
                           $("body").scrollTop(0);
                           $("body").css("overflow","scroll");
                           $("body").css("overflow-y","hidden");
                           $("body").css("overflow-x","hidden");
                   }else{
                           $("body").css("overflow","scroll");
                           $("body").css("overflow-y","auto");
                           $("body").css("overflow-x","auto");
                   }activeElement.html(html);
               }
            },
            error:function(err,status){

            }
        });
      }

    //手动左移右移主要内容
    var mySwiper1 = new Swiper('#listView',{
          direction:'horizontal',
          loop:false,
          speed:400,
          lazyLoading:true,
          onSlideChangeStart:function(swiper){
              $("#title .nav li").removeClass("active");
              switch(swiper.activeIndex){
                case 0:{$("#title .nav li:eq(0)").addClass("active");break;}
                case 1:{$("#title .nav li:eq(1)").addClass("active");break;}
                case 2:{$("#title .nav li:eq(2)").addClass("active");break;}
                case 3:{$("#title .nav li:eq(3)").addClass("active");break;}
                case 4:{$("#title .nav li:eq(4)").addClass("active");break;}
                default:break;
             }
          },
          onSlideChangeEnd:function(swiper){
             switch(swiper.activeIndex){
                case 0:{touchAjaxNav("新书推荐",mySwiper1.activeIndex,$(".slide0"));break;}
                case 1:{touchAjaxNav("理工",mySwiper1.activeIndex,$(".slide1"));break;}
                case 2:{touchAjaxNav("经济",mySwiper1.activeIndex,$(".slide2"));break;}
                case 3:{touchAjaxNav("哲学",mySwiper1.activeIndex,$(".slide3"));break;}
                case 4:{touchAjaxNav("文学",mySwiper1.activeIndex,$(".slide4"));break;}
                default:break;
             }
          }
    });
    
    //点击nav栏时
     $("#title .nav").click(function(event){
         var event = event || window.event;
         event.preventDefault();
         var target = event.target;
         $("#title .nav a").css("backgroundColor","");
          $("#title .nav li").removeClass("active");
          if(target.nodeName.toLowerCase() == 'a'){
              switch(target.innerHTML){ 
                  case '新书推荐':{$("#title .nav li:eq(0)").addClass("active");mySwiper1.slideTo(0,400,true);break;}
                  case '理工':{$("#title .nav li:eq(1)").addClass("active");mySwiper1.slideTo(1,400,true);break;}
                  case '经济':{$("#title .nav li:eq(2)").addClass("active");mySwiper1.slideTo(2,400,true);break;}
                  case '哲学':{$("#title .nav li:eq(3)").addClass("active");mySwiper1.slideTo(3,400,true);break;}
                  case '文学':{$("#title .nav li:eq(4)").addClass("active");mySwiper1.slideTo(4,400,true);break;}
                  default:break;
              }
          }
     });

    window.onpopstate = function() {
        // location.href = "home?title=新书推荐&type=first";
        var state = window.history.state;
        $("#title .nav li").removeClass("active");
        var activeNav = state.activeNav;
        $('#title .nav li:eq('+activeNav+")").addClass("active");
        $('title').text(state.title);
        mySwiper1.slideTo(activeNav,400,true);
        // $("#listView").html(state.html1);
        // window.history.replaceState && window.history.replaceState(state, state.title, state.url);
    };


    // function submitAjaxNav(title){
    //     $.ajax({
    //         url:'/home',
    //         data:{
    //             title:title,
    //         },
    //         type:'get',
    //         success:function(data,status){
    //            if(status == 'success'){
    //                $('title').text(data.title);
    //                var bookObject = data.data;
    //                var html = '';
    //                if(bookObject !== 'wrong'){
    //                    bookObject.forEach(function(values){
    //                       html += '<a href="detail?bookId='+values.bookId+'">'+
    //                                 '<div class="listView-item">'+
    //                                    '<div class="listView-item-content">'+      
    //                                      '<img src="img/'+values.bookPic+'" style="width: 4.5rem;height: 5rem;">'+ 
    //                                          '<ul>'+
    //                                              '<li>'+values.bookName+'</li>'+
    //                                              '<li>作者：'+values.author+'</li>'+
    //                                           '</ul>'+
    //                                         '</div>'+
    //                                         '<div>剩余量：'+values.bookNum+'</div>'+
    //                                       '</div></a>';
    //                    });
    //                    html += '<div class="listView-item">没有更多了...</div>';
    //                    var state = {html1:html,title:data.title,url:'home?title=新书推荐&type=first'};
    //                    window.history.pushState(state,state.title,state.url);
    //                }else{
    //                    html += '<div style="background: white;">pages is '+data+'</div>';
    //                }
    //                $("#listView").html(html);
    //            }
    //         },
    //         error:function(err,status){

    //         }
    //     });
    // }
});