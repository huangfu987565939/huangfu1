//封装冒泡排序	
function maoPao(arr) {
	for(var i = 0; i < arr.length; i++) {
		for(var j = 0; j < arr.length - i; j++) {
			if(arr[j] > arr[j + 1]) {
				var temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}


//封装去重
function quChong(arr) {
	arr.sort();
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == arr[i + 1]) {
			arr.splice(i + 1, 1);
			i--
		}
	}
	return arr;
}

//封装date补0

function buLing(num) {
	if(num < 10) {
		return '0' + num
	}
	return num
}

//dateUtil.js

var dateUtil = {
	//输入任意年份判断是否是闰年，返回true和false；

	runnian: function(year) {
		if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
			return true;
		}
		return false;
	},
	//将日期格式化输出 “2015|08|24”，传两个参数，一个时日期，一个是分隔符。

	geshi: function(dates, str) {
		var oDate = new Date();
		var year = oDate.getFullYear();
		var month = oDate.getMonth() + 1;
		var day = oDate.getDay();

		return year + str + buLing(month) + str + buLing(day);

		function buLing(num) {
			if(num < 10) {
				return '0' + num
			}
			return num
		}
	},
	//获得某个月份的天数

	monthDay: function(year, month) {
		switch(month) {
			case 4:
			case 6:
			case 9:
			case 11:
				return 30;
			case 2:
				if(dateUtil.runnian(year)) {
					return 29;
				}
				return 28;
			default:
				return 31;
		}
	},

	//判断两个日期相差的天数.

	chatianshu: function(date1, date2) {
		var ss = Math.abs((date1 - date2) / 1000);
		var day = Math.floor(ss / 3600 / 24);
		var hours = Math.floor(ss / 3600 % 24);
		var minutes = Math.floor(ss / 60 % 60);
		var secound = Math.floor(ss % 60)

		return day + "天" + hours + "时" + minutes + "分" + secound + "秒";
	},

	getN: function(n) {
		var date = new Date();
		var day = date.getDate();
		date.setDate(day + n);
		return date;
	}

}

//行内样式和css重叠样式通用的样式
//	  obj : var outer = document.getElementById("outer");某个对象
//    attr: "height"；某个属性；
//获取当前元素的某个样式的值；某个属性值。

function getStyle(obj, attr) {

	if(obj.currentStyle) { //能力检测
		return obj.getComputedStyle[attr];
	}
		return getComputedStyle(obj,false)[attr];
}

//cookie 的封装；
function setCookie(name, value, day) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + day);
	document.cookie = name + "=" + value + ";expires=" + oDate;

}

function getCookie(name) {
	var strCookie = document.cookie;
	//需要对字符串进行分割（;）
	var arrCookie = strCookie.split("; ");
	//console.log(arrCookie);
	for(var i = 0; i < arrCookie.length; i++) {
		//把数组中的每一项以=分割，判断形参和分割后的数组中的第一元素是否相等，相等则返回第二个元素
		var arr = arrCookie[i].split("=");
		if(arr[0] == name) {
			return arr[1];
		}
	}
}

function removeCookie(name) {
	setCookie(name, 1, -1);

}

//拖拽函数封装    ele表示元素名

function drag(ele) {
	ele.onmousedown = function(e) {
		var evt = e || event;
		var disX = evt.offsetX;
		var disY = evt.offsetY;
		document.onmousemove = function(e) {
			var evt = e || event;
			var _left = evt.clientX - disX;
			var _top = evt.clientY - disY;
			if(_left <= 0) {
				_left = 0
			}
			if(_top <= 0) {
				_top = 0
			}
			if(_left >= document.documentElement.clientWidth - ele.offsetWidth) {
				_left = document.documentElement.clientWidth - ele.offsetWidth;
			}
			if(_top >= document.documentElement.clientHeight - ele.offsetWidth) {
				_top = document.documentElement.clientHeight - ele.offsetWidth;
			}
			ele.style.left = _left + "px";
			ele.style.top = _top + "px";
		}
		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}
}



/*
 * TAB栏切换
 * arr表示要实现切换的元素数组
 * classname表示元素的效果类名
 */
function tab(arr, classname) {
	for(var i = 0; i < arr.length; i++) {
		arr[i].onclick = function() {
			for(var j = 0; j < arr.length; j++) {
				arr[j].className = "";
			}
			this.className = classname;
		}
	}
}

/*
 * 获取元素
 * ele表示元素
 */
function get(ele) {
	if(ele.charAt(0) == ".") {
		var newEle = ele.slice(1);
		return document.getElementsByClassName(newEle);
	} else if(ele.charAt(0) == "#") {
		var newEle = ele.slice(1);
		return document.getElementById(newEle);
	} else {
		return document.getElementsByTagName(ele);
	}
}

/*
 * 获取当前正在生效样式
 * ele表示元素
 * attr是要获取的元素的属性名
 */
function getStyle(ele, attr) {
	if(ele.currentStyle) {
		return ele.currentStyle[attr];
	} else {
		return getComputedStyle(ele, false)[attr];
	}
}

/*
 * 缓动动画完整封装
 * ele表示元素
 * json表示要改变的元素的属性和值  {"width":200,"height":300}
 * fn为回调函数
 */
function startMove(ele, json, fn) {
	clearInterval(ele.timer);
	ele.timer = setInterval(function() {
		var flag = true;
		for(var attr in json) {
			if(attr == "opacity") {
				var iCur = Math.round(getStyle(ele, attr) * 100);
			} else {
				var iCur = parseInt(getStyle(ele, attr));
			}
			var iTarget = json[attr];
			var iSpeed = (iTarget - iCur) / 10;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			if(attr == "opacity") {
				ele.style.opacity = (iCur + iSpeed) / 100;
				ele.style.filter = "alpha(opacity=" + (iCur + iSpeed) + ")";
			} else {
				ele.style[attr] = iCur + iSpeed + "px";
			}
			if(iCur != iTarget) {
				flag = false;
			}
		}
		if(flag) {
			clearInterval(ele.timer);
			if(fn) {
				fn();
			}
		}
	}, 30)
}

/*
 * 缓动动画封装（仅限于水平方向）
 * ele表示元素
 * target表示目标值
 */
function huandong(ele, target) {
	clearInterval(ele.timer);
	ele.timer = setInterval(function() {
		var step = (target - ele.offsetLeft) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		ele.style.left = ele.offsetLeft + step + "px";
		if(ele.offsetLeft == target) {
			clearInterval(ele.timer);
		}
	}, 30)
}

/*
 * 匀速运动封装（仅限于水平方向）
 * ele表示元素
 * target表示目标值
 */
function yunsu(ele, target) {
	clearInterval(ele.timer);
	var speed = target > ele.offsetLeft ? 10 : -10;
	ele.timer = setInterval(function() {
		ele.style.left = ele.offsetLeft + speed + "px";
		if(Math.abs(target - ele.offsetLeft) <= Math.abs(speed)) {
			ele.style.left = target + "px";
			clearInterval(ele.timer);
		}
	}, 30)
}

/*
 * 页面滚动条跳转
 * target表示要滚动条要跳转到的目标值
 */
function toTop(target) {
	clearInterval(timer);
	timer = setInterval(function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var step = (target - scrollTop) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		document.documentElement.scrollTop = document.body.scrollTop = scrollTop + step;
		if(Math.abs(target - scrollTop) <= Math.abs(step)) {
			document.documentElement.scrollTop = document.body.scrollTop = target;
			clearInterval(timer);
		}
	}, 30)
}

/*
 * 获取数组中的最小值的索引
 * arr表示数组
 */
function getMinIndex(arr) {
	var minVal = Math.min.apply(null, arr);
	var minIndex = arr.indexOf(minVal);
	return minIndex;
}

/*
 * 获取数组中的最大值的索引
 * arr表示数组
 */
function getMaxIndex(arr) {
	var maxVal = Math.max.apply(null, arr);
	var maxIndex = arr.indexOf(maxVal);
	return maxIndex;
}

/*
 * 轮播图（此封装局限性很大，请按照如下注释布局，id名一定要正确）
 * 调用方法：  window.onload=function(){
 * 			  lunbo();
 * 		  }
 */

/*<div id="banner">
	<ul id="imgWrap">
		<li>
			<a href="#"><img src="img/1.jpg"/></a>
		</li>
		<li>
			<a href="#"><img src="img/2.jpg"/></a>
		</li>
		<li>
			<a href="#"><img src="img/3.jpg"/></a>
		</li>
		<li>
			<a href="#"><img src="img/4.jpg"/></a>
		</li>
		<li>
			<a href="#"><img src="img/5.jpg"/></a>
		</li>
	</ul>
	<ol id="focusWrap">
		<li id="cur">1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
	</ol>
	<div id="btn">
		<span>&lt;</span>
		<span>&gt;</span>
	</div>
</div>*/

function lunbo() {
	var banner = document.getElementById("banner");
	var ul = document.getElementById("imgWrap");
	var ol = document.getElementById("focusWrap");
	var btn = document.getElementById("btn");
	var cloneLi = ul.children[0].cloneNode(true);
	ul.appendChild(cloneLi);
	var aFocus = ol.children;
	var aLi = ul.children;
	var timer = null;
	var imgWidth = ul.children[0].offsetWidth;
	timer = setInterval(animate, 3000)
	var i = 0;
	for(var j = 0; j < aFocus.length; j++) {
		aFocus[j].index = j;
		aFocus[j].onmouseover = function() {
			i = this.index - 1;
			animate();
		}
	}
	banner.onmouseover = function() {
		btn.style.display = "block";
		clearInterval(timer);
	}
	banner.onmouseout = function() {
		btn.style.display = "none";
		timer = setInterval(animate, 3000);
	}
	btn.children[0].onclick = function() {
		i = i - 2;
		animate();
	}
	btn.children[0].onselectstart = function() {
		return false;
	}
	btn.children[1].onclick = function() {
		animate();
	}
	btn.children[1].onselectstart = function() {
		return false;
	}

	function animate() {
		i++;
		if(i == aLi.length) {
			i = 1;
			ul.style.left = 0;
		}
		if(i == -1) {
			i = aLi.length - 2;
			ul.style.left = -imgWidth * (aLi.length - 1) + "px";
		}
		startMove(ul, {
			"left": -imgWidth * i
		});

		for(var j = 0; j < aFocus.length; j++) {
			aFocus[j].id = "";
		}
		if(i == aFocus.length) {
			aFocus[0].id = "cur";
		} else {
			aFocus[i].id = "cur";
		}
	}
}

//oUl为图片列表ul
//aLi为图片列表li
//perHeightvar clon = aLi[0].cloneNode(true);   oUl.appendChild(clon);    var perHeight = aLi[0].offsetHeight;第一张图片的值。
//cur li的class值，
function move() {
			i++;
			if(i == aLi.length) {
				i = 1;
				oUl.style.top = 0;
			}

			if(i == -1) {
				oUl.style.top = -perHeight * (aLi.length - 1) + "px";
				i = aLi.length - 2;
			}

			for(var j = 0; j < aFlist.length; j++) {
				aFlist[j].className = "";
			}

			if(i == aFlist.length) {
				aFlist[0].className = "cur";
			} else {
				aFlist[i].className = "cur";
			}
			startMove(oUl, {
				"top": -perHeight * i
			});
		}


	//递归实现深拷贝；
	function deepCopy(obj){
		if(typeof obj == "object"){
			if(Array.isArray(obj)){//问是不是数组
				var newObj = [];
			}else{
				var newObj = {};
			}
			for(var i in obj){
				if(typeof obj[i] == "object"){
					newObj[i] = deepCopy(obj[i]);
				}else{
					newObj[i] = obj[i];
				}
			}
			return newObj;
		}
		return newObj;
	}


		
