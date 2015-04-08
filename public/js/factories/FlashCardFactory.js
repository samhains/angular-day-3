app.factory('FlashCardsFactory', function ($http) {

    return {
        flashCards: [],
        getFlashCards: function () {
            return $http.get('/cards').then(function (response) {
                this.flashCards = response.data;
                return this.flashCards;
            });
        },
        getFlashCardsByCategory: function (category) {

            var configObj = {
                params: {
                    category: category
                }
            };

            return $http.get('/cards', configObj).then(function (response) {
                this.flashCards = response.data;
                return this.flashCards;
            });
        }
    };

});