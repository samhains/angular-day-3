app.factory('FlashCardsFactory', function ($http) {
    var flashCards= [];
    return {   
        getFlashCards: function () {
            return $http.get('/cards').then(function (response) {
                flashCards = response.data;
                return flashCards;
            });
        },
        getFlashCardsByCategory: function (category) {

            var configObj = {
                params: {
                    category: category
                }
            };

            return $http.get('/cards', configObj).then(function (response) {
                flashCards = response.data;
                return flashCards;
            });
        },
        addFlashCard: function(newCard){
            flashCards.push(newCard);
        }
    };

});