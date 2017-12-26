//id获取商品
var str_id = location.search;
var str_arr = str_id.split('=');
var productId = str_arr[1];
//console.log(productId)

for (let i=1;i<=8;i++) {
	for (let k=1;k<=7;k++) {
		var sc = document.createElement('script');
//		sc.src ='http://ss.gome.com.cn/item/v1/floorSelect/floor1and11_' +i+ '/tab_' +k+ '/11010200/home/flag/homepage/test?callback=test';
		sc.src = "http://ss.gome.com.cn/item/v1/floorSelect/floor1and11_1/tab_1/11010200/home/flag/homepage/test?callback=test";
		document.body.appendChild(sc);
		document.body.removeChild(sc);
		
		function test(data){
			console.log(data)
			for (let j=0;j<data.list.length;j++) {
//					console.log(data.list[j].goodsImgs[0].src)
				if (data.list[j].productId == productId) {
					$('.detail-container-left .small-pic img').attr('src',data.list[j].goodsImgs[0].src);
					$('.detail-container-left .big-pic img').attr('src',data.list[j].goodsImgs[0].src);
					$(data.list[j].goodsImgs).each(function(index){
						$('.detail-container-left .list-pic ul').append("<li><a href='javascript:;'><img src='" +data.list[j].goodsImgs[index].src+ "'></a></li>");
					})
					$('.detail-container-right .detail-con-r-title h2').text(data.list[j].name);
					$('.detail-container-right .detail-con-r-price span').text(data.list[j].gomePrice);
					if (data.list[j].salesProperty[0] != undefined) {
						$('.detail-con-r-color b').text(data.list[j].salesProperty[0].chinesename);
						$(data.list[j].salesProperty[0].skutions).each(function(index){
							$('.detail-con-r-color .detail-con-r-model-box ul').append("<li><a href='javascript:;'><span>" +data.list[j].salesProperty[0].skutions[index].title+ "</span></a><i></i></li>")
						})
					}
					
					if (data.list[j].salesProperty[1] != undefined) {
						$('.detail-con-r-volume b').text(data.list[j].salesProperty[1].chinesename);
						$(data.list[j].salesProperty[1].skutions).each(function(index){
							$('.detail-con-r-volume-box ul').append("<li><a href='javascript:;'>"+data.list[j].salesProperty[1].skutions[index].title+"</a><i></i></li>");
						})
					}
					
					$('.list-pic li').each(function(index){
						$('.list-pic li').eq(index).hover(function(){
							$('.small-pic img').attr('src',$(this).find('img').attr('src'));
							$('.big-pic img').attr('src',$(this).find('img').attr('src'));
						})
					})
					
					$('.detail-con-r-model-box li').click(function(){
						$(this).css({'border':'1px solid #e3101e'}).siblings().css({'border':'1px solid #e6e6e6'});
						$(this).children().last().css({'display':'block'});
						$(this).siblings().children().nextAll().css({'display':'none'});
					})
					
					$('.detail-con-r-volume-box li').click(function(){
						$(this).css({border:'1px solid #e3101e'}).siblings().css({border:'1px solid #e6e6e6'});
						$(this).children().last().css({"display":"block"});
						$(this).siblings().children().nextAll().css({"display":"none"});
					})
					
				}
			}
		}
	}
}

//放大镜效果 
$('.small-pic').hover(function(){
	$('.mask').css({'display':'block'});
	$('.big-pic').css({'display':'block'});
	var imgWidth = $('.big-pic').width() * $('.small-pic').width() / $('.mask').width();
	$('.big-pic img').css({'width':imgWidth});
},function(){
	$('.mask').css({ display: 'none' });
	$('.big-pic').css({ display: 'none' });
});

$('.mask').mousemove(function(e){
	var offsetX = e.pageX - $('.detail-container-left').offset().left;
	var offsetY = e.pageY - $('.detail-container-left').offset().top;
	var x = offsetX - $('.mask').width() / 2;
	var y = offsetY - $('.mask').height() / 2;
	if(x < 0) { x = 0; } else if(x > $('.small-pic').width() - $('.mask').width()) { x = $('.small-pic').width() - $('.mask').width() + 'px'; }
	if(y < 0) { y = 0; } else if(y > $('.small-pic').height() - $('.mask').height()) { y = $('.small-pic').width() - $('.mask').width() + 'px'; }
	$('.mask').css({'left':x,'top':y});
	var imgNum = $('.small-pic').width() / $('.big-pic img').width();
	var imgX = -x / imgNum;
	var imgY = -y / imgNum;
	$('.big-pic img').css({ 'left': imgX, 'top': imgY });
})

//cookie
var cookieStr = getCookie('cartproducts');
//console.log(cookieStr)
if(cookieStr == undefined) {
	var arr = [];
} else {
	var arr = JSON.parse(cookieStr);
	var cartproducts_num = 0;
	for (let i=0;i<arr.length;i++) {
		cartproducts_num += Number(arr[i].num);
	}
	$('#cart span i').text(cartproducts_num);
	$('#cart a').eq(1).text("已有" +cartproducts_num+ "件商品，点击查看!") 
}


//点击加数字
var shoppingNum = Number($('#cart i').text());
console.log(shoppingNum);
$('.myshopping-btn').click(function(){
	shoppingNum++;
	$('#cart span i').text(shoppingNum);
	$('#cart a').eq(1).text("已有" +shoppingNum+ "件商品，点击查看!")
	
	$('.animate-box img').attr('src',$('.detail-container-left .small-pic img').attr('src'));
	

	
	//购物车对象处理
	
	var obj = new Object();
	obj.name = $('.detail-con-r-title h2').text();
	obj.pic = $('.detail-container-left .small-pic img').attr('src');
	obj.price = $('.detail-con-r-price span').text();
	obj.num = 1;
	
	if (arr.length == 0) {
		arr.push(obj);
	} else {
		var isHas = false;
		for (var i=0;i<arr.length;i++) {
			var tmpObj = arr[i];
			if (tmpObj.name == obj.name) {
				tmpObj.num++;
				isHas = true;
			}
		}
		
		if (isHas == false) {
			arr.push(obj);
		}
	}
	setCookie('cartproducts',JSON.stringify(arr),7);
	return false;
	
})








