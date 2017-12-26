window.onload=function(){
	
var obox = document.getElementById("box");
var oScrollImg = document.getElementById("scrollImg");                            
var oFocusList = document.getElementById("focusList");                            
var oPrev = document.getElementsByClassName("prev")[0];                           
var oNext = document.getElementsByClassName("next")[0];                           
                                                                                  
                                                                                  
var aLi = oScrollImg.children;                                                    
//焦点列表                                                                            
var aFlist = oFocusList.children;                                                 
                                                                                  
aLi[0].style.opacity = 1;                                                         
aLi[0].style.filter = "alpha(opacity="+100+")";                                   
var i = 0;                                                                        
var timer = setInterval(function(){                                               
	move();                                                                       
},3000);                                                                          
                                                                                  
for(let j = 0; j < aFlist.length; j++){                                           
	aFlist[j].onmouseover = function(){                                           
		clearInterval(timer);                                                     
		i = j-1;                                                                  
		move();                                                                   
	}                                                                             
	aFlist[j].onmouseout = function(){                                            
		timer = setInterval(function(){                                           
			move();                                                               
		},3000);                                                                  
	}                                                                             
}                                                                                 
                                                                                  
                                                                                  
oNext.onclick = function(){                                                       
	clearInterval(timer);                                                         
	move();                                                                       
}                                                                                 
oPrev.onclick = function(){                                                       
	clearInterval(timer);                                                         
	i = i -2;                                                                     
	move();                                                                       
}                                                                                 
                                                                                  
obox.onmouseleave = function(){                                                   
	clearInterval(timer);                                                         
	timer = setInterval(function(){                                               
		move();                                                                   
	},3000)                                                                       
}                                                                                 
function move(){                                                                  
	i++;                                                                          
	if(i==aLi.length){                                                            
		i=0;                                                                      
	}                                                                             
	if(i==-1){                                                                    
		i = aLi.length -1;                                                        
	}                                                                             
                                                                                  
	for(var j = 0; j < aLi.length; j++){                                          
		aFlist[j].className = "";                                                 
		startMove(aLi[j],{"opacity":0});                                          
	}                                                                             
	                                                                              
	aFlist[i].className = "cur";                                                  
	                                                                              
	startMove(aLi[i],{"opacity":100});                                            
}                                                                                 
                                                                                                                                                                    
}