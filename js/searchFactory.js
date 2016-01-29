githubUserSearch.factory('Search', ['$http', function($http){
  var access_token = 'a70e53ac1ea367cad16c02891f09ea8ba3f2d2a3';
  var queryUrl = 'https://api.github.com/search/users';
  
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          access_token: access_token
        }
      });
    }
  };
}]);
