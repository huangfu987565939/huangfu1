//$.ajax({
//	type:"get",
//	url:"http://bigd.gome.com.cn/gome/rec?callback=?&boxid=box18&pid=9140046570&cid=48915958913689966&area=11010200&brid=&imagesize=160&shopid=&c1id=&c3id=&sid=1130051653&_=1514034509728",
//	async:true,
//	dataType:"jsonp",
//	success: function(data) {
//		console.log(data.lst);
//			var str,str1 = "";
//			for(var i = 0;i<data.lst.length;i++){
//				console.log(data.lst[i].iurl)
//				console.log(data.lst[i].pn)
//				console.log(data.lst[i].price)
//				console.log(data.lst[i].purl)
//				str='<h2>'+data.lst[i].pn+'</h2>'
//				str1='<span>'+data.lst[i].price+'</span>'
//			}
//			$("#maxlist-t").append(str)
//			$("#maxlist-c").append(str1)
//		}
//});



$(function(){
	$.ajax({
		type:"get",
		url:"http://bigd.gome.com.cn/gome/rec?boxid=box20&pid=&area=11010200&cid=48915958913689966&uid=&imagesize=120&c1n=&c3n=&brid=&shopid=&c1id=&c3id=&sid=&callback=?&_=1514193959920",
		async:true,
		dataType:"jsonp",
		success:function(data){
			var str = ""
			for(var i= 0 ;i<data.lst.length;i++){
//				console.log(data.lst[i])
				str+='<li><a href=""><img src="'+data.lst[i].iurl+'"></a><a href="">'+data.lst[i].pn+'</a><a href = "">'+data.lst[i].price+'</a></li>'
			}
			$(".detail-content ul").append(str)
		}
	})
})
$(function(){
	$.ajax({
		type:"get",
		url:"http://bigd.gome.com.cn/gome/rec?boxid=box20&pid=&area=11010200&cid=48915958913689966&uid=&imagesize=120&c1n=&c3n=&brid=&shopid=&c1id=&c3id=&sid=&callback=?&_=1514193959920",
		async:true,
		dataType:"jsonp",
		success:function(data){
			var str = ""
			for(var i= 0 ;i<data.lst.length;i++){
//				console.log(data.lst[i])
				str+='<li><a href=""><img src="'+data.lst[i].iurl+'"></a><a href="">'+data.lst[i].pn+'</a><a href = "">'+data.lst[i].price+'</a></li>'
			}
			$(".detail-content ul").append(str)
		}
	})
})


//$(function(){
//	$.ajax({
//		type:"get",
//		url:"http://bigd.gome.com.cn/gome/rec?boxid=box20&pid=&area=11010200&cid=48915958913689966&uid=&imagesize=120&c1n=&c3n=&brid=&shopid=&c1id=&c3id=&sid=&callback=?&_=1514193959920",
//		async:true,
//		dataType:"jsonp",
//		success:function(data){
//			console.log(data)
//			var str = ""
////			for(var i= 0 ;i<data.lst.length;i++){
////				console.log(data.lst[i])
////				str+='<li><a href=""><img src="'+data.lst[i].iurl+'"></a><a href="">'+data.lst[i].pn+'</a><a href = "">'+data.lst[i].price+'</a></li>'
////			}
////			$(".detail-content ul").append(str)
//		}
//	})
//})
