$(document).ready(function(){
	$("#page-5 .col11 img, #page-5 .col21 img").on({
		"mouseenter": function(){
			console.log("haha")
			if ($(this).parent().hasClass("col11")){
				$(this).attr("src", "img/5-mc.png");
			}
			else{	
				$(this).attr("src", "img/5-bc.png");
			}
		}, 
		"mouseout": function(){
			if ($(this).parent().hasClass("col11")){
				$(this).attr("src", "img/5-m.png");
			}
			else{	
				$(this).attr("src", "img/5-b.png");
			}
		}
	});

	$("#page-6 img").on({
		"mouseenter": function(){
			$(this).parent("").find("img.house").css('opacity', '0.5');
		}, 
		"mouseout": function(){
			$(this).parent("").find("img.house").css('opacity', '1');
		}
	});
});