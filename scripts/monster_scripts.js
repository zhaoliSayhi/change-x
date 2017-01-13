$(document).ready(function() {
	golightning();      
	window.onblur = stopLightning();
	window.onfocus = golightning();
	var int1, int2, int3;       

	//定义3个闪电
	function lightning_one() {
		$("#container #lightning1").fadeIn(250).fadeOut(250);
	};
	function lightning_two() {
		$("#container #lightning2").fadeIn(250).fadeOut(250);
	};
	function lightning_three() {
		$("#container #lightning3").fadeIn(250).fadeOut(250);
	};
	

	//为3个闪电设置不同的定时器
	function golightning() {
		int1 = setInterval(function() {
			lightning_one();
		},
		1000
		);
		int2 = setInterval(function() {
			lightning_two()
		},
		2000
		);
		int3 = setInterval(function() {
			lightning_three()
		},
		3000
		);
	}

	//清除3个闪电间隔的定时器
	function stopLightning() {
		window.clearInterval(int1);
		window.clearInterval(int2);
		window.clearInterval(int3);
	}
	
	//4个部位分别点击的次数
	var clix = [0, 0, 0, 0];     

	//通过点击次数移动图片
	function moveMe(i, obj) {
		if (clix[i] < 9) {
			$(obj).animate({left:"-=367px"}, 500);
			clix[i] += 1;
		}
		else { 
			clix[i] = 0;
			$(obj).animate({left:"0px"}, 500);
		}
	}

	//分别使4个部位可点击，并调用 moveMe()函数来移动图片
	$("#head").click(function() {
		moveMe(0, this);
	})	
	$("#eyes").click(function() {
		moveMe(1, this);
	})
	$("#nose").click(function() {
		moveMe(2, this);
	})
	$("#mouth").click(function() {
		moveMe(3, this);
	})

	var w = 367    
	var m = 10;
	function getRandom(num) {
		var my_random_num = Math.floor(Math.random()*num);
		return my_random_num;
	}

	$("#btnRandom").click(randomize);

	//随机移动目标到当前位置
	function randomize() {
		$(".face").each(function(index) {    
			var target_position = getRandom(m);    
			var current_position = clix[index];		
			clix[index] = target_position;      
			if (target_position > current_position) {
				var move_to = (target_position - current_position) *w;         
				$(this).animate({left: "-=" +move_to+ "px"},500);
			}
			else if (target_position < current_position) {
				var move_to = (current_position - target_position) *w;
				$(this).animate({left: "+=" +move_to+ "px"},500);
			}
			else{

			}
			
		});
	};

	//重新开始游戏
	$("#btnReset").click(rest);

	function rest() {
		$(".face").each(function(index) {
			clix[index] = 0;        
			$(this).animate({left: "0px"},500);   
		});
	}
})	 
