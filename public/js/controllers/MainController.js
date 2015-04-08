app.controller('MainController', function (FlashCardsFactory, $scope) {

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.currentCategory = null;

    $scope.flashCards = [];
    $scope.showLoader = false;

    $scope.getCategoryCards = function (theCategory) {
        $scope.currentCategory = theCategory;
        $scope.showLoader = true;
        FlashCardsFactory.getFlashCardsByCategory(theCategory).then(function (cards) {
            $scope.flashCards = cards;
            $scope.showLoader = false;
        });
    };

    $scope.getAllCards = function () {
        $scope.currentCategory = null;
        $scope.showLoader = true;
        FlashCardsFactory.getFlashCards().then(function (cards) {
            $scope.flashCards = cards;
             $scope.showLoader = false;
        });
    };

    $scope.getAllCards();

});