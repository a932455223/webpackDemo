//UMD模块方案
(function(window,factory){
	if(typeof exports === 'object'){
		module.exports = factory(require('jquery'));
	}else if(typeof define === 'function' && define.amd){
		define(['jquery'],factory);
	}else{
		factor();
	}
})(window,function($){
	$.fn.green = function(){
		$(this).each(function(){
			$(this).css('color','green');
		});
	}
});