//$.ajax({
//	type:"get",
//	url:"http://bigd.gome.com.cn/gome/rec?callback=?&boxid=box18&pid=9140046570&cid=48915958913689966&area=11010200&brid=&imagesize=160&shopid=&c1id=&c3id=&sid=1130051653&_=1514034509728",
//	async:true,
//	dataType:"jsonp",
//	success: function(data) {
////		console.log(data.lst);
//			var str = "";
//			for(var i = 0;i<data.lst.length;i++){
////				console.log(data.lst[i].iurl)
////				console.log(data.lst[i].pn)
////				console.log(data.lst[i].price)<a href=""><i class="iconfont icon-gouwuchekong"></i><span>加入购物车</span></a>
//				str += '<li><a href = "detail.html"><img src="'+data.lst[i].iurl+'"></a><a href = "#">'+data.lst[i].pn+'</a><span>'+data.lst[i].price+'</span></br><a href="#"><i class="iconfont icon-gouwuchekong"></i><span>加入购物车</span></a></li>'
//			}
////			console.log(str)
//			$("#nice").append(str)	
//		}
//});

//
//var oScript = document.createElement("script");
//oScript.src = "https://ss.gome.com.cn/item/v1/floorSelect/floor1and11_1/tab_7/11010200/home/flag/homepage/test15?callback=?&_=1505973992572"
//document.body.appendChild(oScript)
//function test15(data){
//	console.log(data.list[0])
//}

$(function(){
	var cookie = getCookie('cartproducts')
	console.log(cookie)
	var str1 = getCookie('cartproducts');
	var arr = JSON.parse(str1);
	if(arr.length == 0){
		$('.con-box').css({display:'block'});
	}else{
		$('.con-box').css({ display: 'none' });
	var num = 0;
	for(var i = 0;i<arr.length;i++){
		var obj = arr[i];
		num++;
		$('.container-box').append($('<ul></ul>').addClass('container-list' + num));
			$('.container-list' + num).append($('<li></li>').append(($('<a></a>').attr('href', 'detail.html')).append($('<img>').attr('src', obj.pic))));
			$('.container-list' + num).append($('<li></li>').append(($('<a></a>').attr('href', 'detail.html')).append($('<p></p>').addClass('container-list-name').text(obj.name))));
			$('.container-list' + num).append($('<li></li>').append($('<p></p>').text()));
			$('.container-list' + num).append($('<li></li>').append($('<p></p>').text()));
			$('.container-list' + num).append($('<li></li>').append($('<p></p>').text('￥' + obj.price)));
			$('.container-list' + num).append($('<li></li>').append($('<div class="c-btn"></div>').append('<a class="left-btn" href="javascript:;">-</a>', '<a class="right-btn" href="javascript:;">+</a>').append($('<input class="c-num" type="number">').val(obj.num))));
			$('.container-list' + num).append($('<li>￥</li>').append($('<p class="prices"></p>').text(obj.price)));
			$('.container-list' + num).append($('<li></li>').append(($('<a></a>').attr('href', 'javascript:location.reload();').addClass('container-list-btn')).text('删除')));
			
		}
	}
$('.container-list-btn').click(function() {
		var index = $(this).parent().parent().index();
		arr.splice(index, 1);
		setCookie('cartproducts', JSON.stringify(arr), 7);
	});
	var sum=0;
	for(let i=0;i<arr.length;i++){
		sum+=Number(arr[i].price)*Number(arr[i].num);
		$('.prices').eq(i).text(Number(arr[i].price)*Number(arr[i].num));
		$('.shopping-money1 span').text(sum + '.00');
	}
	
	//+-
	var jia = document.getElementsByClassName('right-btn');
	var jian = document.getElementsByClassName('left-btn');
	var numsp = document.getElementsByClassName('c-num');
	var subtotal = 0;
	for(let i = 0; i < jia.length; i++) {
		jia[i].onclick = function() {
			numsp[i].value = parseInt(numsp[i].value) + 1; //数量
			arr[$(this).parent().parent().parent().index()].num++;
			setCookie('cartproducts', JSON.stringify(arr), 7);
			var total = parseInt(arr[i].price);
			subtotal = total * parseInt(numsp[i].value);
			$('.prices').eq(i).text(subtotal);
			var Money = 0;
			for(let i = 0; i < $('.prices').length; i++) {
				Money += parseInt($('.prices').eq(i).text());
				$('.shopping-money1 span').text(Money + '.00');
			}
		}
	}
	
	for(let i = 0; i < jian.length; i++) {
		jian[i].onclick = function() {
			if(numsp[i].value <= 1) {
				numsp[i].value = 1;
			} else {
				numsp[i].value = parseInt(numsp[i].value) - 1;
				arr[$(this).parent().parent().parent().index()].num--;
				setCookie('cartproducts', JSON.stringify(arr), 7);
				var total = parseInt(arr[i].price);
				subtotal = total * parseInt(numsp[i].value);
				$('.prices').eq(i).text(subtotal);
				var Money = 0;
				for(let i = 0; i < $('.prices').length; i++) {
					Money += parseInt($('.prices').eq(i).text());
					$('.shopping-money1 span').text(Money + '.00');
					
				}
			}
		}
	}
	
	//val
	for (let i = 0; i < numsp.length; i++) {
		numsp[i].onchange = function(){
			if (numsp[i].value < 0) {
				numsp[i].value = 0;
			} else{
				arr[i].num = numsp[i].value;
				setCookie('cartproducts', JSON.stringify(arr), 7);
				var total = parseInt(arr[i].price);
				subtotal = total * parseInt(numsp[i].value);
				$('.prices').eq(i).text(subtotal);
				var Money = 0;
				for(let i = 0; i < $('.prices').length; i++) {
					Money += parseInt($('.prices').eq(i).text());
					$('.shopping-money1 span').text(Money + '.00');
					
				}
			}
		}
	}
	
	

	
})
