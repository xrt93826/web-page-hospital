$(function(){
	doNewsToggle();
	doMyToggle();
	doModulesToggle();
	doCheckMore();
});

function doNewsToggle(){
	$("#newstoggle").find("span").each(function(index){
		$(this).css("cursor","pointer").mouseover(function(){
			$(this).addClass("news_checked").siblings().removeClass("news_checked");
			$(".news_content").hide().eq(index).show();
		});
	});
}
function doMyToggle(){
	$("#mybtn").find("span").each(function(index){
		$(this).css("cursor","pointer").click(function(){
			$(".professor_wrap").hide().eq(index).show();
		});
	});
}
function doModulesToggle(){
	$("#modtoggle").find("li").each(function(index){
		$(this).css("cursor","pointer").mouseover(function(){
			$(this).addClass("gfhjs_checked").siblings().removeClass("gfhjs_checked");
			$(".mod_content").hide().eq(index).show();
		});
	});
}
function doCheckMore(){
	$(".kfal_wrap .kfal_row:gt(0)").hide();
	$(".kfal_button").css("cursor","pointer").click(function(){
		$(".kfal_wrap .kfal_row:gt(0)").slideToggle();
	});
}