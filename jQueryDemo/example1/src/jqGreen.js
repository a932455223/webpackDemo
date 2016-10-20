//没有模块化
(function($){
	$.fn.green = function(){
		$(this).each(function(){
			$(this).css('color','green');
		})
	}
})(jQuery);