$(window).load(function(){
	// 網站loading
	$('#loading').stop().animate({'top':'-100%'},500);
})
$(document).ready(function(){
	// 導覽航點擊捲動導引
	$("a[href^=#]:not([href=#])").click(function(e){	
		e.preventDefault();
		// 取得顯示內容的位置
		var target = $($(this).attr("href")).offset().top;
		// 將座標減70px
		target -= 70;
		// 平滑捲動到指定位置
		$("html, body").animate({scrollTop: target + 100 }, 500);
		return false;
	});
	// 滑鼠滑過特效
	$('.hover-a').hover(function(){
		$(this).addClass('bounce animated05')
	},function(){
		$(this).removeClass('bounce animated05')
	});
	// 至頂
	$('#toTop').click(function(e){
		e.preventDefault();
		// 平滑捲動到指定位置
		$("html, body").animate({scrollTop: 0}, 500);
	})
	// 客服link
	$('#service').on('click',function(e){
		e.preventDefault();
		Service();
	});
	// 客服-F
	function Service() {
	    var url = 'http://liveperson.lp2chat.com/dbpcn/';
	    window.open(url, 'newwindow', 'width=800,height=600');
	};
})
$(window).scroll(function(){
	// 第二頻出現
	var window_h = $(window).height();
	if($(window).scrollTop() > window_h-200){
		$('.float-nav').addClass("fadeIn animated05");		
	} else {
		$('.float-nav').removeClass("fadeIn animated05");
	}	
	// 獲取螢幕高度的一半
	var window_h = $(window).height();
	// 設定功能表的新顯示位置
	$(".float-nav").stop().animate({"top" : $(window).scrollTop() + window_h/3}, 500);
});
// 滾動淡入特效
$(function(){
	// 獲取每個b-block
	var setArea = $('.showblock'),
	// 差距高
	showHeight = 150;
	// 所有block 隱藏
	setArea.css({display:'block',opacity:'0'});

	$(window).on('load scroll',function(){
		
		setArea.each(function(){
			// 獲取this指向
			var setThis = $(this),
			
			areaTop = setThis.offset().top;

			if ($(window).scrollTop() >= (areaTop + showHeight) - $(window).height()){
				setThis.stop().animate({opacity:'1'},500);

			} else {
				setThis.stop().animate({opacity:'0'},500);
			}
		});

	});
});

