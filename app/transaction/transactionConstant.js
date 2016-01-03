(function(angular){

angular
	.module('MySaving.transaction')
	.constant('urlConst', {
		
		base : 'http://localhost',
		port : '8888',
		getApiBaseUrl : function(){ return this.base + ':' + this.port;},
		transaction : '/transactions'
	}).constant('',{
		mon : '',
		win : ''
	});

})(angular);