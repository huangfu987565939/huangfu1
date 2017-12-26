function getCookie(name) {

	var arr = decodeURIComponent(document.cookie).split('; ');
	//console.log(arr)
	for(var i = 0; i < arr.length; i++) {
		var tmpStr = arr[i];
		var cookieName = tmpStr.split('=')[0];
		var cookieValue = tmpStr.split('=')[1];
		if(cookieName == name) {
			//console.log(cookieValue)
			return cookieValue;
		}

	}
}

function setCookie(name, value, iDay, path) {

	value = encodeURIComponent(value);

	var now = new Date();
	now.setDate(now.getDate() + iDay);
	if(path) {
		document.cookie = name + '=' + value + ';expires=' + now + ';path=' + path;

	} else {
		document.cookie = name + '=' + value + ';expires=' + now;

	}
}

function removeCookie(name) {
	setCookie(name, '', -1);
}