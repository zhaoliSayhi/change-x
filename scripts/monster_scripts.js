$(document).ready(function(){

	var headclix = 0, eyesclix = 0, noseclix = 0, mouthclix = 0;    //各个部位变量初始值设为零，因为还没点击任何元素

	//调用使闪电反复闪烁的定时函数
	lightning_one(4000);
	lightning_two(5000);
	lightning_three(7000);

	$("#head").click(function(){           //使#head元素可点击    
		if(headclix < 9){                 //限制用户最多点击9次
			$(this).animate({left:"-=367px"},500);     //每次点击#head元素时#head元素向左相对移动367px，时限指定为半秒
			headclix += 1;               //将headclix变量设为原值加1            
		}
		else{
			$(this).animate({left:"0px"},500);         //将#head元素移回到它原来的位置（left:0px），时限指定为半秒
			headclix = 0;               //第9次点击之后重置headcilx变量为0
		}
	});

	$("#eyes").click(function(){
		if(eyesclix < 9){       
			$(this).animate({left:"-=367px"},500);
			headclix += 1;
		}
		else{
			$(this).animate({left:"0px"},500);
			eyesclix = 0;
		}
	});

	$("#nose").click(function(){
		if(noseclix < 9){         
			$(this).animate({left:"-=367px"},500);
			noseclix = 0;
		}
		else{
			$(this).animate({left:"0px"},500);
			noseclix = 0;
		}
	});

	$("#mouth").click(function(){
		if(mouthclix < 9){
			$(this).animate({left:"-=367px"},500);
			mouthclix += 1;
		}
		else{
			$(this).animate({left:"0px"},500);
			mouthclix = 0;
		}
	});
});

//用定时函数使闪电反复闪烁
function lightning_one(t){
	$("#container #lightning1").fadeIn(250).fadeOut(250);        //将#lightning1元素淡入淡出，时限分别为1/4秒
	setTimeout("lightning_one()",t);          //setTimeout()方法告诉js解释器运行一个函数，另外再次运行之前先等待一段时间
};
function lightning_two(t){
	$("#container #lightning2").fadeIn("fast").fadeOut("fast");
	setTimeout("lightning_two()",t);
};
function lightning_three(t){
	$("#container #lightning3").fadeIn("fast").fadeOut("fast");
	setTimeout("lightning_three()",t);
};