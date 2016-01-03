(function(angular){

angular
	.module('MySaving.transaction')
	.factory('Transaction',Transaction);

function Transaction(){
	var transactionClass=function(obj){
		if( angular.isDefined(obj) ){
			this.type = obj['type'] || this.type;
			this.amount = obj['amount'] || this.amount;
			this.owner = obj['owner'] || this.owner;
			this.date = obj['date'] || this.date;
			this.id = obj['id'] || this.date;
		}
	};

	transactionClass.prototype.type = "";
	transactionClass.prototype.amount = 0;
	transactionClass.prototype.owner = "";
	transactionClass.prototype.date = undefined;
	transactionClass.prototype.id = undefined;

	transactionClass.prototype.update = function(){

	};

	transactionClass.prototype.delete = function(){

	};

	transactionClass.prototype.load = function(){

	};

	transactionClass.prototype.add = function(){

	};

	return transactionClass;
}

})(angular);