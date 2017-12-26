window.onload = function() {
	var iList = document.getElementsByTagName("i");
	//	console.log(iList)
	var oInput = document.getElementsByTagName("input");
	var oBtn = document.getElementById("btn");

	oBtn.onclick = function() {
		
		var Txtname = oInput[0];
		console.log(Txtname)
		var oReg = /^[a-z0-9_-]{4,20}$/;
		if(oReg.test(Txtname.value)) {
			iList[0].innerHTML = ' 用户名格式正确';

		} else if(Txtname.value == '') {
			iList[0].innerHTML = '用户名不为空'
		} else {
			iList[0].innerHTML = ' 用户名格式不正确'
		}

		var Passname = oInput[1]
		var oReg = /^([a-zA-z_]{1})([\w]*)$/g;
		if(oReg.test(Passname.value)) {
			iList[1].innerHTML = '密码验证通过'
		} else if(Passname.value == '') {} else {
			iList[1].innerHTML = '密码验证失败'
		}
		var Passnamex = oInput[2]
		if(Passnamex.value != Passname.value) {
			iList[2].innerHTML = '密码不一致'
		}
		
		sessionStorage.setItem($("#txt").val(),$("#psw1").val())
			//console.log(sessionStorage.getItem('name'))
			location.href = "登录.html";
			return false;
	}
	
	var oSpan = document.getElementsByClassName("span")[0]
	var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
	var str = '';
	for(var i = 0; i < 4; i++) {
		var num = Math.floor(Math.random() * arr.length);
		str = str + arr[num];
	}
	oSpan.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
	oSpan.innerHTML = str;
	oInput[3].onchange = function(){
		var yanzheng = oInput[3].value;
		
		if(yanzheng==str){
			iList[3].innerHTML = '验证通过'
		}else{
			iList[3].innerHTML = '验证失败'
		}
	}
}