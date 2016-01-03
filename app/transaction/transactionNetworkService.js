(function(angular){

angular
	.module('MySaving.transaction')
	.service('transactionNetworkService', transactionNetworkService);

function transactionNetworkService($http,urlConst){

	var url = urlConst.getApiBaseUrl() + urlConst.transaction;
	this.getTransactions = function(){
		return $http.get(url);
	};

	this.getTransactionById = function(id){

	};

	this.updateTransaction = function(){

	};

};

})(angular);