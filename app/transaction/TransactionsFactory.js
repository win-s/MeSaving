(function(angular){

angular.module('MySaving.transaction')
	.factory('Transactions',Transactions);

function Transactions(Transaction){
	var transactionsClass = function(obj){
		if( angular.isArray(obj) ){
			this._transactions = obj;
			this._synTransactionsObj();
		}
	};

	transactionsClass.prototype._transactions = [];

	transactionsClass.prototype._synTransactionsObj = function(){

		var transactionObj;
		var tempTransactions=this._transactions;
		this._transactions = [];
		angular.forEach( tempTransactions, function(value){

			transactionObj = new Transaction(value);
			this._transactions.push(transactionObj);			
		},this);

	};

	transactionsClass.prototype.getTransactionsArray = function(){
		return this._transactions;
	};

	transactionsClass.prototype.setTransactions = function(){
		return this._transactions;
	};

	return transactionsClass;
};

})(angular);