var myModule = angular.module('module1', []);

mainController.$inject = ['$scope']; 

myModule.controller('mainController', mainController );

function mainController($scope){
  $scope.items = "";
  $scope.message = "";  
  $scope.color = "#fff";
  $scope.checkItems = function(){
	$scope.count = 0;
	if(!$scope.items){ 
		$scope.color = "red";
		$scope.message = "Please enter data first";
	}else{ 
		var items = $scope.items.split(",");  
		angular.forEach(items, function(value, key){
			if(value){
				$scope.count++;
			}
		});
		if($scope.count <= 3){
			$scope.message = "Enjoy!";
		}else{
			$scope.message = "Too much!";
		} 
		$scope.color = "green";
	}
	$scope.items = "";
  }
}  