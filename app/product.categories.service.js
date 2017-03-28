angular.module("app")
    .service("productCategoriesService", [ function(){

        var searchWord = '';
        var setSearchWord = function(word) {
            searchWord = word;
        };
        var getSearchWord = function() {
            return  searchWord;
        };

        var searchCatId = '';
        var setSearchCatId = function(catId) {
            searchCatId = catId;
        };
        var getSearchCatId = function() {
            return  searchCatId;
        };

        var searchState = '';
        var setSearchState = function(state) {
            searchState = state;
        };
        var getSearchState = function() {
            return  searchState;
        };


        return {
            setSearchCatId: setSearchCatId,
            getSearchCatId: getSearchCatId,

            setSearchWord: setSearchWord,
            getSearchWord: getSearchWord,

            getSearchState: getSearchState,
            setSearchState: setSearchState

        };

    }]);
