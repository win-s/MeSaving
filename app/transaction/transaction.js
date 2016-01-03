(function(angular){

angular
	.module('MySaving.transaction',['ngRoute'])
	.config(config);

function config($routeProvider){
	$routeProvider
		.when('/transactions', {
			templateUrl : 'transaction/transaction.html',
			controller : 'transactionController'
		});
};

function run(){

};

})(angular);