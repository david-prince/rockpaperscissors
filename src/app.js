
angular.module('david.playground', [])
  .controller('DavidCtrl', ['$scope', function($scope) {
	  console.log("David is here.");
	  var computerChoice = function(){
		  var comChoice = Math.random();
		  if (comChoice <= .33){
			  comChoice = "rock";
		  } else if (comChoice >= .66){
			  comChoice = "paper";
		  } else {
			  comChoice = "scissors";
		  }
		  return comChoice;
	  };
	  $scope.message = "Choose rock, paper, or scissors. Select your choice below.";
	  $scope.choice = "";
	  
	  $scope.buttonClick = function() {
		  var bob = computerChoice();
		  console.log(bob);
		  
		  $scope.message = "";
		  
	  };
	  
  }])
  ;

