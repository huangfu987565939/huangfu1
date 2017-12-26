$(function() {
	$.ajax({
		type: "get",
		url: "data/one.json",
		async: true,
		success: function(data) {
			//						console.log(data);
			var str = "";
			for(var i = 0; i < data.data.length; i++) {
				str += '<li><a href = "#">' + data.data[i] + '</a></li>'
			}
			//						console.log(str)
			//			$("#five").append(str);
			$("#five #u1").append(str);
		}
	});
})

$(function() {
	$.ajax({
		type: "get",
		url: "data/three.json",
		async: true,
		success: function(data) {
//			console.log(data);
			var str = "";
			for(var i = 0; i < data.length; i++) {
				str += '<a href = "#"><img src = "' + data[i] + '"></a>'
			}
//			console.log(str)
			$("#cententBox #c_l_b .img1").append(str);
			$("#cententBox #c_l_b .img2").append(str);
		}
	});
})

$(function() {
	$.ajax({
		type: "get",
		url: "data/four.json",
		async: true,
		success: function(data) {
//			console.log(data);
			var str = "";
			for(var i = 0; i < data.length; i++) {
				str += '<a href = "#"><img src = "' + data[i] + '"></a>'
			}
//			console.log(str)
			$("#cententBox #c_l_b1 .img3").append(str);
		}
	});
})
$(function() {
	$.ajax({
		type: "get",
		url: "data/five.json",
		async: true,
		success: function(data) {
//			console.log(data);
			var str = "";
			for(var i = 0; i < data.length; i++) {
				str += '<a href = "#"><img src = "' + data[i] + '"></a>'
			}
//			console.log(str)
			$("#cententBox #c_l_b1 .img4").append(str);
		}
	});
})

//window.onload = function(){
//	
//var ul_two  =document.getElementById("ul_two")
//			var five = document.getElementById("five")
//			ul_two.onmouseover = function(){
//				five.style.display = "block"
//				
//			}
//			ul_two.onmouseout = function(){
//				five.style.display = "none"
//			}
//}


$.ajax({
		type:"get",
		url:"http://bigd.gome.com.cn/gome/rec?boxid=box23&callback=?",
		async:true,
		dataType:"jsonp",
		success:function(data){
					var str="";
				for(var i = 0;i<data.lst.length;i++){
//				/	console.log(data.lst[i])
						str+='<div class="hot-l"><li><img src = "'+data.lst[i].iurl+'"></li><span>'+data.lst[i].pn+'</span><li>'+data.lst[i].price+'</li></div>'
//					console.log(str)
				}
				$("#hotBox").append(str)
			
		}
	});
	
$.ajax({
	type:"get",
		url:"data/seven.json",
		async:true,
		success:function(data){
//			console.log(data);
			var str = ""
			for(var i = 0;i<data.length;i++){
//					console.log(data[i])
				str+='<div class = "youimg"><img src = "'+data[i].url+'"></div><div class="youright"><p>'+data[i].p+'</p><h3>'+data[i].price+'<h3><span>'+data[i].h+'</span></div>'	
			}
//			console.log(str)
			$("#youyan").append(str)
		}
})
	
	
	
	
	
	
	
	
$(function() {
	$.ajax({
		type: "get",
		url: "data/two.json",
		async: true,
		success: function(data) {
			//						console.log(data);
			var str = "";
			for(var i = 0; i < data.data.length; i++) {
				str += '<li><a href = "#">' + data.data[i] + '</a></li>'
			}
			$("#six #u2").append(str);
		}
	});
})
$(function() {
	$.ajax({
		type: "get",
		url: "data/six.json",
		async: true,
		data:"jsonp",
		success: function(data) {
//			console.log(data);
			var str = "";
			for(var i = 0; i < data.length; i++) {
				str += '<a href = "#"><img src = "' + data[i] + '"></a>'
			}
//			console.log(str)
			$("#manage #manage_b #manage_b_l").append(str);
		}
	});
})
//$(function(){
//	$.ajax({
//		type:"get",
//		url:"https://dc.3.cn/category/get?callback=?",
//		async:true,
//		dataType:"jsonp",
//		scriptCharset:"gbk",
//		success:function(data){
//			var data = data.data;
//			console.log(data)
//			var str = "";
//			var data1 = data[1]
//			console.log(data1.b[0])
//				var arr1 = data1.b[0].split("|")
////				console.log(arr1[1])
//				var arr2 = data1.b[1].split("|")
//				var arr3 = data1.b[2].split("|")
//				var arr4 = data1.b[3].split("|")
//				var arr5 = data1.b[4].split("|")
//				var arr6 = data1.b[5].split("|")
//				var arr7 = data1.b[6].split("|")
//				var arr8 = data1.b[7].split("|")
//				var arr9 = data1.b[8].split("|")
//				var arr10 = data1.p[0].split("|")
//				var arr11 = data1.p[1].split("|")
//				var arr12 = data1.t[1].split("|")
//				var arr13 = data1.t[2].split("|")
//				var arr14 = data1.t[3].split("|")
//				var arr15 = data1.t[4].split("|")
//				var arr16 = data1.t[5].split("|")
//				console.log(arr13[1],arr16[1])//huodong
////			for(var i = 0;i<data1.b.length;i++){
////				for(var j = 0;j<data1[1].length;j++){
//					str+='<ul><li>'+arr1[1]+'</li><li>'+arr2[1]+'</li><li>'+arr3[1]+'</li><li>'+arr4[1]+'</li><li>'+arr5[1]+'</li><li>'+arr6[1]+'</li><li>'+arr7[1]+'</li><li>'+arr8[1]+'</li><li>'+arr9[1]+'</li><ul/>'
////				}
////			}
////			console.log(str)
//			$("#ul_1").append(str);
//		}
//	});
//})
//<li>'+arr10[1]+'</li><li>'+arr11[1]+'</li><li>'+arr12[1]+'</li><li>'+arr13[1]+'</li><li>'+arr14[1]+'</li><li>'+arr15[1]+'</li><li>'+arr16[1]+'</li>

//$.ajax({
//		type:"get",
//		url:"https://dc.3.cn/category/get?callback=?",
//		async:true,
//		dataType:"jsonp",
//		scriptCharset:"gbk",
//		success:function(data){
//			var data=data.data;
//			var str1="";
//			var str3="";
//			for(var i=0;i<data.length;i++){
//				var detail=data[i].s[0].s;
//				var str="";
//				for(var j=0;j<data[i].s.length;j++){
//					var arr=data[i].s[j].n.split("|");
//					str+='<a href="http://'+arr[0]+'">'+arr[1]+'</a><span>/</span>';
//				}
//				str1+='<li>'+str+'</li>';
//				
//				var str2="";
//				var str4="";
//				for(var k=0;k<data[i].t.length;k++){
//					var arr1=data[i].t[k].split("|");
//					str2+='<a href="http://'+arr1[0]+'">'+arr1[1]+'<i class="iconfont icon-icon"></i></a>';
//				}
//				
//				var str6="";
//				var str7="";
//				for(var j=0;j<data[i].b.length;j++){
//					var arr4=data[i].b[j].split("|");
//					str6+='<a href="http://'+arr4[0]+'"><img src="http://img11.360buyimg.com/'+arr4[2]+'"/></a>';
//				}
//				for(var j=0;j<data[i].p.length;j++){
//					var arr5=data[i].p[j].split("|");
//					str7+='<a href="http://'+arr5[0]+'"><img src="http://img11.360buyimg.com/'+arr5[2]+'"/></a>';
//				}
//				
//				
//				for(var l=0;l<detail.length;l++){
//				var str5="";
//				var arr2=detail[l].n.split("|");
//				for(var m=0;m<detail[l].s.length;m++){
//				var arr3=detail[l].s[m].n.split("|");
//				if(arr3[0][0].charCodeAt()>=48 && arr3[0][0].charCodeAt()<=57){
//					str5+='<a href="http://list.jd.com/list.html?cat='+arr3[0]+'">'+arr3[1]+'</a>'
//					}else{
//					str5+='<a href="http://'+arr3[0]+'">'+arr3[1]+'</a>'
//					}
//				}
//				str4+='<dl class="cate_detail_item"><dt class="cate_detail_tit"><a href="http://'+arr2[0]+'">'+arr2[1]+'<i class="iconfont icon-icon"></i></a></dt><dd class="cate_detail_con">'+str5+'</dd></dl>';
//				}
//				str3+='<div class="cate_part clearfix"><div class="cate_part_1"><div class="cate_channel">'+str2+'</div><div class="cate_detail">'+str4+'</div></div><div class="cate_part_2"><div class="cate_top">'+str6+'</div><div class="cate_bot">'+str7+'</div></div></div>';
//				
//			}
//			console.log(str4)
////			$("#ul_1").html(str1);
//			
//			
//		}
//	});

var sc = document.createElement('script');
sc.src = 'https://ss.gome.com.cn/exactNavNew.html?callback=navData';
document.body.appendChild(sc);
document.body.removeChild(sc);

function navData(data) {
	var data = data.navDat[0].ch.fc.te;
	var num = 0;

	for(var i = 0; i < data.length; i++) {
		var data1 = data[i];

		var memu = document.getElementById('menu');
		var lis = memu.getElementsByTagName('li');
		var box = document.createElement('div')
		box.className = 'box';
		lis[num].appendChild(box);
		num++;
		var p = document.createElement('p');
		box.appendChild(p);

		for(var m = 0; m < data1.ch.fct.cl.length; m++) {
			var data2 = data1.ch.fct.cl[m];
			var tips = document.createElement('a');
			tips.className = 'tips';
			tips.href = '#';
			p.appendChild(tips);
			tips.innerHTML = data2.t;
			var span = document.createElement('span');
			span.style = 'margin-left:6px';
			span.innerHTML = '&gt';
			tips.appendChild(span);
		}

		for(var n = 0; n < data1.ch.ta.ch.tc.te.length; n++) {
			var data3 = data1.ch.ta.ch.tc.te[n];
			var p = document.createElement('p');
			box.appendChild(p);

			var title = document.createElement('a');
			title.href = '#';
			title.className = 'title';
			title.innerHTML = data3.mn;
			p.appendChild(title);

			var tags = document.createElement('div');
			tags.className = 'tags';
			p.appendChild(tags);

			var data4 = data3.ch.tc.cl;
			for(var y = 0; y < data4.length; y++) {
				var tag = document.createElement('a');
				tag.href = '#'
				tag.className = 'tag';
				tag.innerHTML = data4[y].t;
				tags.appendChild(tag);
			}
		}

		var imgBox = document.createElement('div');
		imgBox.className = 'imgBox';
		box.appendChild(imgBox);
		for(var z = 0; z < data1.ch.fcb.il.length; z++) {
			var str = data1.ch.fcb.il[z];
			var img = document.createElement('img');
			img.className = 'pic1';
			img.src = str.s;
			imgBox.appendChild(img);
		}
		for(var w = 0; w < data1.ch.fcbp.il.length; w++) {
			var str = data1.ch.fcbp.il[w];
			var img = document.createElement('img');
			img.className = 'pic2';
			img.src = str.s;
			imgBox.appendChild(img);
		}
	}
}

//---------------floor_nav
$(function() {
	var flag = true;
	$(window).scroll(function() {
		if(flag) {
			var scrollTop = $(this).scrollTop();
			if(scrollTop > 1350 && scrollTop < 5000) {
				$('#floor_nav').fadeIn();
			} else {
				$('#floor_nav').fadeOut();
			}
			$('#floor').children('div').each(function(index){
				var _top = $(this).offset().top - $(this).height()/2;
				if (scrollTop >= _top) {
					$('.floor_nav_list').find('li').eq(index).find('b').css({'visibility':'visible'});
					$('.floor_nav_list').find('li').eq(index).siblings().children().prevAll().css({'visibility':'hidden'});
					$('.floor_nav_list').find('li').eq(index).find('span').css({'color':'#F5004B'});
					$('.floor_nav_list').find('li').eq(index).siblings().find('span').css({'color':''});
					$('.floor_nav_list').find('li').eq(index).find('p').css({'color':'#F5004B'});
					$('.floor_nav_list').find('li').eq(index).siblings().find('p').css({'color':''});
				}
			})

		}
	})

	$(".floor_nav_list").find("li").click(function() {
		$(this).find('b').css({ 'visibility': 'visible' });
		$(this).siblings().children().prevAll().css({ 'visibility': 'hidden' });
		$(this).find('span').css({ 'color': '#F5004B' });
		$(this).siblings().find('span').css({ 'color': '' });
		$(this).find('p').css({ 'color': '#F5004B' });
		$(this).siblings().find('p').css({ 'color': '' });
		var index = $(this).index();
		var _top = $('#floor').children('div').eq(index).offset().top;
		$('html,body').animate({ 'scrollTop': _top }, 500, function() {
			flag = true;
		})
	})
	
	
	$('.floor_nav_btn li').eq(0).click(function(){
		flag = false;
    	$('body,html').animate({scrollTop:0},500,function(){
    		flag = true;
    		$('#floor_nav').css({'display':'none'});
    	});
	});
	
	//回底部
	$('.floor_nav_btn li').eq(1).click(function(){
		flag = false;
    	$('body,html').animate({scrollTop:document.body.clientHeight},500,function(){
    		flag = true;
    		$('#floor_nav').css({'display':'none'});
    	});
	});
})