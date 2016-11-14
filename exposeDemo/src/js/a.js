(function(factory){
	if(typeof module === 'object' && typeof module.exports == 'object'){
		module.exports = factory;
	}else if(typeof define === 'function' && define.amd){
		define('a',factory);
	}

})(function(){
	console.log('this is the module a');
});