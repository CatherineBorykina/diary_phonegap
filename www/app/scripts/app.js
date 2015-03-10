
(function(window, angular){
    
    var App = angular.module("App",['ngResource']);



    App.controller('DiaryCtrl', ['$resource', '$scope', function ($resource, $scope) {

        $scope.games = [];
        $scope.date = {};
        $scope.date.current = new Date();
        $scope.dairy = {};
        $scope.dairy.story = [];

        /*var Data = $resource('', null, {
            getData: {
                method: 'GET',
                url:    'http://gd2.mlb.com/components/game/mlb/year_2014/month_03/day_06/master_scoreboard.json'
            }
        });

        Data.getData().$promise.then(function (resp) {
            resp = resp.data.games;

            $scope.games = resp.game;
            $scope.date = {
                next: resp.next_day_date,
                current: resp.modified_date,
                prev: '...'
            };
        });*/

        $scope.getNext = function (selectedDate) {
            console.log(selectedDate);
        };

        $scope.addStory = function (){
            $scope.dairy.story.push($scope.dairy.edit);
            $scope.dairy.edit = "";
        };

        
    }]);

    App.filter('orderByMyTeam', function () {
        return function ( items, value ) {

            var filtered = [];
            angular.forEach(items, function ( item ) {
                filtered.push(item);
            });

            filtered.sort(function ( a ) {
                return [a['away_team_name'], a['home_team_name']].indexOf(value) === -1 ? 1 : -1;
            });

            return filtered;
        };
    });



})(window, angular);