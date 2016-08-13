$(function(){
	doMyToggle();
});

function doMyToggle(){
	$("#mybtn").find("span").each(function(index){
		$(this).css("cursor","pointer").click(function(){
			$(".zhuanjia_info").hide().eq(index).show();
		});
	});
}
