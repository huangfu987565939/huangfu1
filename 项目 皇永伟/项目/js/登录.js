$(function(){
	$('.login-head-left').click(function(){
		$('.login-fooder-1').css({display:'block'});
		$('.login-fooder-2').css({display:'none'});
	})
	$('.login-head-right').click(function(){
		$('.login-fooder-1').css({display:'none'});
		$('.login-fooder-2').css({display:'block'});
	})
	
$("#btn").click(function(){
			if(sessionStorage.getItem($("#txt").val())==$("#psw").val()){
				location.href = "主页.html"
			}else{
				alert("用户名或者密码错误")
			}
		})
})