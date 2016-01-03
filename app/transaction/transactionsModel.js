(function(angular){

angular
	.module('MySaving.transaction')
	.service('transactionsModel', transactionsModel);

function transactionsModel(Transactions,transactionNetworkService){
	var _loaded = false;
	var _transactions = undefined;
	var _loadedPromise = undefined;

	function init(){
		_loadedPromise = transactionNetworkService.getTransactions()

			.success(function(response){
 				
				_transactions = new Transactions(response);
				_loaded = true;

			}).error(function(){

			});

	};init();

	this.isLoaded = function(){
		return _loaded;
	};

	this.getTransactions = function(){
		return _transactions;
	};

	this.getLoadedPromise = function(){
		return _loadedPromise;
	}
};

})(angular);