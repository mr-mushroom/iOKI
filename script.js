var ex1lock = false;

var checkEx1 = function() {
	if(!ex1lock) {
		var answers = ["foggy","raining","sunny","cloudy","windy","snowing"];
		var answersUser = $(".exercise1 input[type=text]").map(function(){
			return $(this).attr("value");
		}).get();
		for(i = 0; i < 6; i++) {
			if(answers[i] === answersUser[i].replace(/\s+/g, '').toLowerCase()) {
				$($(".exercise1 .answer").get(i)).addClass('right');
			}else{
				$($(".exercise1 .answer").get(i)).addClass('wrong');
			}
		}
		//$(".exercise1 input[type=text]").prop({disabled: true});
		$(".exercise1 input[type=button]").addClass('reload');
		ex1lock = true;
	}else{
		$(".exercise1 .answer").removeClass('right');
		$(".exercise1 .answer").removeClass('wrong');
		//$(".exercise1 input[type=text]").prop({disabled: false});
		$(".exercise1 input[type=button]").removeClass('reload');
		ex1lock = false;
	}
}


var ex2lock = false;

var checkEx2 = function() {
	if(!ex2lock) {
		var answers = ["2","3","4","1","5","6"];
		var answersUser = $(".exercise2 input[type=text]").map(function(){
			return $(this).attr("value");
		}).get();
		for(i = 0; i < 6; i++) {
			if(answers[i] === answersUser[i].replace(/\s+/g, '').toLowerCase()) {
				$($(".exercise2 .answer").get(i)).addClass('right');
			}else{
				$($(".exercise2 .answer").get(i)).addClass('wrong');
			}
		}
		//$(".exercise1 input[type=text]").prop({disabled: true});
		$(".exercise2 input[type=button]").addClass('reload');
		ex2lock = true;
	}else{
		$(".exercise2 .answer").removeClass('right');
		$(".exercise2 .answer").removeClass('wrong');
		//$(".exercise1 input[type=text]").prop({disabled: false});
		$(".exercise2 input[type=button]").removeClass('reload');
		ex2lock = false;
	}
}