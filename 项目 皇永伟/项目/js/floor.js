//1F-1
var F1_1 = document.createElement('script');
F1_1.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_1/tab_1/11010200/home/flag/homepage/foo1?callback=';
document.body.appendChild(F1_1);
document.body.removeChild(F1_1);
function foo1(obj){
//	console.log(obj.list);
	for(var i=0;i<obj.list.length;i++){
		$('.F1-box-ul-1').append($('<li></li>').addClass('F1-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
		$('.F1-box-ul-1 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
		$('.F1-box-ul-1 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F1-box-li-name'));
		$('.F1-box-ul-1 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F1-box-li-price'));
		$('.F1-box-ul-1 .F1-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
	};	
};

//1F-2
var F1_2 = document.createElement('script');
F1_2.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_1/tab_2/11010200/home/flag/homepage/test12?callback=test12&_=1505999815189';
document.body.appendChild(F1_2);
document.body.removeChild(F1_2);
function test12(obj){
//	console.log(obj.list);
	for(var i=0;i<obj.list.length;i++){
		$('.F1-box-ul-2').append($('<li></li>').addClass('F1-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
		$('.F1-box-ul-2 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
		$('.F1-box-ul-2 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F1-box-li-name'));
		$('.F1-box-ul-2 li a').eq(i).append($('<p></p>').append($('<span></span>').text(obj.list[i].salesPromotionTitle)).addClass('F1-box-li-price'));

	};	
};

//1F-3
var F1_3 = document.createElement('script');
F1_3.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_1/tab_3/11010200/home/flag/homepage/test13?callback=';
document.body.appendChild(F1_3);
document.body.removeChild(F1_3);
function test13(obj){
//	console.log(obj.list);
	for(var i=0;i<obj.list.length;i++){
		$('.F1-box-ul-3').append($('<li></li>').addClass('F1-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
		$('.F1-box-ul-3 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
		$('.F1-box-ul-3 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F1-box-li-name'));
		$('.F1-box-ul-3 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F1-box-li-price'));
		$('.F1-box-ul-3 .F1-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
	};	
};

//1F-4
var F1_4 = document.createElement('script');
F1_4.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_1/tab_4/11010200/home/flag/homepage/test14?callback=test14&_=1505974679868';
document.body.appendChild(F1_4);
document.body.removeChild(F1_4);
function test14(obj){
//	console.log(obj.list);
	for(var i=0;i<obj.list.length;i++){
		$('.F1-box-ul-4').append($('<li></li>').addClass('F1-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
		$('.F1-box-ul-4 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
		$('.F1-box-ul-4 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F1-box-li-name'));
		$('.F1-box-ul-4 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F1-box-li-price'));
		$('.F1-box-ul-4 .F1-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
	};	
};

//1F-5
var F1_5 = document.createElement('script');
F1_5.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_1/tab_7/11010200/home/flag/homepage/test15?callback=test15&_=1505973992572';
document.body.appendChild(F1_5);
document.body.removeChild(F1_5);
function test15(obj){
//	console.log(obj.list);
	for(var i=0;i<obj.list.length;i++){
		$('.F1-box-ul-5').append($('<li></li>').addClass('F1-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
		$('.F1-box-ul-5 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
		$('.F1-box-ul-5  a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F1-box-li-name'));
		$('.F1-box-ul-5 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F1-box-li-price'));
		$('.F1-box-ul-5 .F1-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
	};
};

//1F点击
$(function(){
	
$('.F1 .F1-btn li').eq(0).css({'background':'#719ef7'});
	console.log($('.F1 .F1-btn li').eq(0))
for(let i=0;i<$('.F1 .F1-btn li').length;i++){
	console.log("ss")
	$('.F1 .F1-btn li').eq(i).hover(function(){
		$('.F1 .F1-box ul').eq(i).css({display:'block'}).siblings().stop().css({display:'none'});
		$('.F1 .F1-btn li').eq(i).css({'background':'#719ef7'}).siblings().stop().css({'background':'#fff'});
		$('.F1 .F1-btn a').eq(i).css({'color':'#fff'});
	},function(){
		$('.F1 .F1-btn a').eq(i).css({'color':'#000'})
	})
};
})


/***************************************2F***********************************************/
//2F-1
var F2_1 = document.createElement('script');
F2_1.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_5/tab_1/11010200/home/flag/homepage/test21?callback=test21&_=1506003130928';
document.body.appendChild(F2_1);
document.body.removeChild(F2_1);
function test21(obj){
//	console.log(obj.list);
	for(var i=0;i<obj.list.length;i++){
		$('.F2-box-ul-1').append($('<li></li>').addClass('F1-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
		$('.F2-box-ul-1 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
		$('.F2-box-ul-1 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F1-box-li-name'));
		$('.F2-box-ul-1 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F1-box-li-price'));
		$('.F2-box-ul-1 .F1-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
	};	
};

//2F-2
var F2_2 = document.createElement('script');
F2_2.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_5/tab_2/11010200/home/flag/homepage/test22?callback=test22&_=1506003131755';
document.body.appendChild(F2_2);
document.body.removeChild(F2_2);
function test22(obj){
//	console.log(obj.list);
	for(var i=0;i<obj.list.length;i++){
		$('.F2-box-ul-2').append($('<li></li>').addClass('F1-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
		$('.F2-box-ul-2 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
		$('.F2-box-ul-2 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F1-box-li-name'));
		$('.F2-box-ul-2 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F1-box-li-price'));
		$('.F2-box-ul-2 .F1-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
	};	
};

//2F-3
var F2_3 = document.createElement('script');
F2_3.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_5/tab_3/11010200/home/flag/homepage/test23?callback=test23&_=1506003132387';
document.body.appendChild(F2_3);
document.body.removeChild(F2_3);
function test23(obj){
//	console.log(obj.list);
	for(var i=0;i<obj.list.length;i++){
		$('.F2-box-ul-3').append($('<li></li>').addClass('F1-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
		$('.F2-box-ul-3 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
		$('.F2-box-ul-3 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F1-box-li-name'));
		$('.F2-box-ul-3 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F1-box-li-price'));
		$('.F2-box-ul-3 .F1-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
	};	
};

//2F-4
var F2_4 = document.createElement('script');
F2_4.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_5/tab_4/11010200/home/flag/homepage/test24?callback=test24&_=1506003133019';
document.body.appendChild(F2_4);
document.body.removeChild(F2_4);
function test24(obj){
//	console.log(obj.list);
	for(var i=0;i<obj.list.length;i++){
		$('.F2-box-ul-4').append($('<li></li>').addClass('F1-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
		$('.F2-box-ul-4 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
		$('.F2-box-ul-4 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F1-box-li-name'));
		$('.F2-box-ul-4 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F1-box-li-price'));
		$('.F2-box-ul-4 .F1-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
	};	
};

//2F-5
var F2_5 = document.createElement('script');
F2_5.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_5/tab_5/11010200/home/flag/homepage/test25?callback=test25&_=1506003133746';
document.body.appendChild(F2_5);
document.body.removeChild(F2_5);
function test25(obj){
//	console.log(obj.list);
	for(var i=0;i<obj.list.length;i++){
		$('.F2-box-ul-5').append($('<li></li>').addClass('F1-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
		$('.F2-box-ul-5 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
		$('.F2-box-ul-5 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F1-box-li-name'));
		$('.F2-box-ul-5 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F1-box-li-price'));
		$('.F2-box-ul-5 .F1-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
	};	
};

//2F-6
var F2_6 = document.createElement('script');
F2_6.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_5/tab_6/11010200/home/flag/homepage/test26?callback=test26&_=1506003134305';
document.body.appendChild(F2_6);
document.body.removeChild(F2_6);
function test26(obj){
//	console.log(obj.list);
	for(var i=0;i<obj.list.length;i++){
		$('.F2-box-ul-6').append($('<li></li>').addClass('F1-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
		$('.F2-box-ul-6 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
		$('.F2-box-ul-6  a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F1-box-li-name'));
		$('.F2-box-ul-6 li a').eq(i).append($('<p></p>').append($('<span></span>').text(obj.list[i].salesPromotionTitle)).addClass('F1-box-li-price'));
	};
};

//2F点击
$(function(){
	
$('.F2 .F1-btn li').eq(0).css({'background':'#50bfec'});
for(let i=0;i<$('.F2 .F1-btn li').length;i++){
	$('.F2 .F1-btn li').eq(i).hover(function(){
		$('.F2 .F1-box ul').eq(i).css({display:'block'}).siblings().stop().css({display:'none'});
		$('.F2 .F1-btn li').eq(i).css({'background':'#50bfec'}).siblings().stop().css({'background':'#fff'});
		$('.F2 .F1-btn a').eq(i).css({'color':'#fff'});
	},function(){
		$('.F2 .F1-btn a').eq(i).css({'color':'#000'})
	})
};

})

/***************************************4F***********************************************/
//4F-1
var F4_1 = document.createElement('script');
F4_1.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_3/tab_1/11010200/home/flag/homepage/test41?callback=test41&_=1506041992543';
document.body.appendChild(F4_1);
document.body.removeChild(F4_1);
function test41(obj){
//  console.log(obj.list);
    for(var i=0;i<obj.list.length;i++){
        $('.F4-box-ul-1').append($('<li></li>').addClass('F2-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
        $('.F4-box-ul-1 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
        $('.F4-box-ul-1 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F2-box-li-name'));
        $('.F4-box-ul-1 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F2-box-li-price'));
        $('.F4-box-ul-1 .F2-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
    };  
};

//4F-2
var F4_2 = document.createElement('script');
F4_2.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_3/tab_2/11010200/home/flag/homepage/test42?callback=test42&_=1506041993306';
document.body.appendChild(F4_2);
document.body.removeChild(F4_2);
function test42(obj){
//  console.log(obj.list);
    for(var i=0;i<obj.list.length;i++){
        $('.F4-box-ul-2').append($('<li></li>').addClass('F2-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
        $('.F4-box-ul-2 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
        $('.F4-box-ul-2 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F2-box-li-name'));
        $('.F4-box-ul-2 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F2-box-li-price'));
        $('.F4-box-ul-2 .F2-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
    };  
};

//4F-3
var F4_3 = document.createElement('script');
F4_3.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_3/tab_3/11010200/home/flag/homepage/test43?callback=test43&_=1506041993826';
document.body.appendChild(F4_3);
document.body.removeChild(F4_3);
function test43(obj){
//  console.log(obj.list);
    for(var i=0;i<obj.list.length;i++){
        $('.F4-box-ul-3').append($('<li></li>').addClass('F2-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
        $('.F4-box-ul-3 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
        $('.F4-box-ul-3 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F2-box-li-name'));
        $('.F4-box-ul-3 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F2-box-li-price'));
        $('.F4-box-ul-3 .F2-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
    };  
};

//4F-4
var F4_4 = document.createElement('script');
F4_4.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_3/tab_4/11010200/home/flag/homepage/test44?callback=test44&_=1506041994437';
document.body.appendChild(F4_4);
document.body.removeChild(F4_4);
function test44(obj){
//  console.log(obj.list);
    for(var i=0;i<obj.list.length;i++){
        $('.F4-box-ul-4').append($('<li></li>').addClass('F2-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
        $('.F4-box-ul-4 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
        $('.F4-box-ul-4 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F2-box-li-name'));
        $('.F4-box-ul-4 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F2-box-li-price'));
        $('.F4-box-ul-4 .F2-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
    };  
};

//4F-5
var F4_5 = document.createElement('script');
F4_5.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_3/tab_5/11010200/home/flag/homepage/test45?callback=test45&_=1506041995072';
document.body.appendChild(F4_5);
document.body.removeChild(F4_5);
function test45(obj){
//  console.log(obj.list);
    for(var i=0;i<obj.list.length;i++){
        $('.F4-box-ul-5').append($('<li></li>').addClass('F2-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
        $('.F4-box-ul-5 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
        $('.F4-box-ul-5 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F2-box-li-name'));
        $('.F4-box-ul-5 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F2-box-li-price'));
        $('.F4-box-ul-5 .F2-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
    };  
};

//4F-6
var F4_6 = document.createElement('script');
F4_6.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_3/tab_6/11010200/home/flag/homepage/test46?callback=test46&_=1506041995851';
document.body.appendChild(F4_6);
document.body.removeChild(F4_6);
function test46(obj){
//  console.log(obj.list);
    for(var i=0;i<obj.list.length;i++){
        $('.F4-box-ul-6').append($('<li></li>').addClass('F2-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
        $('.F4-box-ul-6 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
        $('.F4-box-ul-6 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F2-box-li-name'));
        $('.F4-box-ul-6 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F2-box-li-price'));
        $('.F4-box-ul-6 .F2-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
    };  
};

//4F-7
var F4_7 = document.createElement('script');
F4_7.src = 'https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_3/tab_7/11010200/home/flag/homepage/test47?callback=test47&_=1506041996552';
document.body.appendChild(F4_7);
document.body.removeChild(F4_7);
function test47(obj){
//  console.log(obj.list);
    for(var i=0;i<obj.list.length;i++){
        $('.F4-box-ul-7').append($('<li></li>').addClass('F2-box-li').append($('<a></a>').attr('href','detail.html?id='+obj.list[i].productId)));
        $('.F4-box-ul-7 li a').eq(i).append($('<img>').attr('src',obj.list[i].goodsImgs[0].src));
        $('.F4-box-ul-7 li a').eq(i).append($('<p></p>').text(obj.list[i].name).addClass('F2-box-li-name'));
        $('.F4-box-ul-7 li a').eq(i).append($('<p></p>').append($('<span></span>').text('￥')).addClass('F2-box-li-price'));
        $('.F4-box-ul-7 .F2-box-li-price').eq(i).append($('<span></span>').text(obj.list[i].gomePrice));
    };  
};

//4F点击
$(function(){
	
$('.F4 .F1-btn li').eq(0).css({'background':'#41ccb8'});
for(let i=0;i<$('.F4 .F1-btn li').length;i++){
	$('.F4 .F1-btn li').eq(i).hover(function(){
		$('.F4 .F2-box ul').eq(i).css({display:'block'}).siblings().stop().css({display:'none'});
		$('.F4 .F1-btn li').eq(i).css({'background':'#41ccb8'}).siblings().stop().css({'background':'#fff'});
		$('.F4 .F1-btn a').eq(i).css({'color':'#fff'});
	},function(){
		$('.F4 .F1-btn a').eq(i).css({'color':'#000'});
	})
}
})
