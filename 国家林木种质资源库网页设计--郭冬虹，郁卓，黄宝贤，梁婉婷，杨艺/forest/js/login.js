$(function(){
    $('.login-box button').click(function(event) {
        swal({ 
          title: "当前尚未开放登录和注册功能哦~期待后续开发吧ヽ(￣▽￣)و ", 
          text: "3秒后自动关闭。", 
        imageUrl: "img/tree_logo.png",
          timer: 3000, 
          showConfirmButton: false 
        },function(){
            swal({ 
              title: "是否回到首页？", 
              text: "确认后将为您跳转回首页", 
              type: "warning",
              showCancelButton: true, 
              confirmButtonColor: "#6bb073",
              confirmButtonText: "返回首页", 
              cancelButtonText: "我再看看",
              closeOnConfirm: true, 
              closeOnCancel: true  
            },
            function(isConfirm){ 
              if (isConfirm) { 
                 window.location.href='index.html';
              } 
            });
             
        });
    });

})