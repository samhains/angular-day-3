app.controller('NewCardController',function($scope, $http, FlashCardsFactory){
	var CleanCard = function() {
	    this.question= null,
	    this.category= null,
	    this.answers= [
	        { text: null, correct: false },
	        { text: null, correct: false },
	        { text: null, correct: false }]
	};

	$scope.newCard = new CleanCard();

	$scope.submitCard = function(newCard){
		//$scope.submitted = true;
		console.log(FlashCardsFactory);

		$http.post('/cards',newCard).then(function(data,err){
			if(err) console.error(err);
			else {
				console.log("successful "+data);
				FlashCardsFactory.addFlashCard(newCard);
				$scope.newCard = new CleanCard();
				$scope.newCardForm.$setPristine();
				$scope.newCardForm.$setUntouched();
			}
		});

	};
});