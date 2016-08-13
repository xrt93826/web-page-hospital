$(function(){
	TouchSlide({
		slideCell:"#banner",
		mainCell:".bd ul",
		effect:"leftLoop",
		autoPlay:true,
	});

	var swiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		autoplay:true,
		speed: 3000,
		slidesPerView: 2,
		loop:true,
		// autoplayDisableOnInteraction: false,
	});
	//京科专家
	TouchSlide({ 
		slideCell:"#slideBox1",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		effect:"leftLoop", 
		autoPage:true, //自动分页
		switchLoad:"_src", //切换加载，真实图片路径为"_src" 
		autoPlay:true //自动播放
	});
	 //京科荣誉 
	TouchSlide({ 
		slideCell:"#slideBox2",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell:".bd ul", 
		effect:"leftLoop", 
		autoPage:true,//自动分页
		autoPlay:true //自动播放
	});
	//关于医院切换
   
	$("#slideBox3 .hd").find("li").each(function(index){
		$(this).click(function(){
			$(this).addClass('btn_toggle').siblings().removeClass('btn_toggle');
		});
	});
	TouchSlide({ slideCell:"#slideBox3",
		endFun:function(i){ //高度自适应
			var bd = document.getElementById("slideBox3_bd");
			bd.parentNode.style.height = bd.children[i].children[0].offsetHeight+"px";
			if(i>0)bd.parentNode.style.transition="200ms";//添加动画效果
		}
	});


	// 返回顶部
	$(window).scroll(function(){
		var top=$(this).scrollTop();
		if(top<400){
			$("#backtop").hide();
		}else{
			$("#backtop").show().click(function() {
				window.location="#top";
			});
		}
	});
	// 面板
	$("#aside_btn").click(function(){
		$("aside").animate({left: 0, opacity: 'show'},"slow");
		$("article").addClass('article_pos').animate({left:'3.75rem',},"slow");
		$("#null").click(function(){
			$("aside").animate({left: '-3.75rem', opacity: 'show'},"slow");
			$("article").animate({left:'0'},"slow",function(){
				$(this).removeClass('article_pos');
			});
			$(this).off("click");
		});
	});
	$(document).on("swipe",function(ent){
		var x1,x2;
		x1=ent.swipestart.coords[0];
		x2=ent.swipestop.coords[0];
		if(x1<x2){
			$("#aside_btn").click();
			
		}
		else{
			$("aside").animate({left: '-3.75rem', opacity: 'show'},"slow");
			$("article").animate({left:'0'},"slow",function(){
				$(this).removeClass('article_pos');
			});
		}


	});
});

