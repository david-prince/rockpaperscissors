
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
	  
	  var whoWins = function(choice1,choice2){
		  var result = "";
		  if (choice1 === choice2) {
			  result = "You tied with the computer!";
		  } else if (choice1 === "rock") {
			  if (choice2 === "scissors") {
				  result = "rock wins!"; 
			  } else {
				  result = "paper wins!";
			  };
		  } else if (choice1 === "paper") {
			  if (choice2 === "rock"){
				  result = "paper wins!";
			  } else {
				  result = "scissors wins!";
			  };
		  } else if (choice1 === "scissors") {
			  if (choice2 === "rock") {
				  result = "rock wins!";
			  } else {
				  result = "scissors wins!";
			  };
		  }
		  return result;
	  }; 

	  $scope.message = "Choose rock, paper, or scissors. Select your choice below.";
	  $scope.choice = "";
	  
	  $scope.buttonClick = function() {
		  var computer = computerChoice();
		  var human = $scope.choice;
		  
		  var result = whoWins(human, computer); 
		  console.log(computer, human, result);
		  
		  $scope.message = result;
		  
	  };
	  
  }])
  ;

