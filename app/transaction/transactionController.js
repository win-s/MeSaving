(function(angular){

angular
	.module('MySaving.transaction')
	.controller('transactionController', transactionController);

function transactionController( $scope, transactionsModel,urlConst){

	// transactionNetworkService
	// 	.getTransactions()
	// 	.sccess(function(response){
	// 		$scope.transactions = response['data'];
	// 	});
	var _transactionModel;
	
	transactionsModel.getLoadedPromise().then(function(){
		_transactionModel = transactionsModel.getTransactions();
		$scope.transactions = _transactionModel.getTransactionsArray();
	});

}

})(angular);