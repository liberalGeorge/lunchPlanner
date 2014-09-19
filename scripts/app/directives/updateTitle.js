/**
 * Created by georginaHughes on 18/09/2014.
 */
lunchPlannerApp.directive('updateTitle', ['$rootScope', '$timeout', function($rootScope, $timeout) {
    return {
        link: function(scope, element) {

            var listener = function(event, toState) {
                var title = 'Lunch Planner for Teams that Lunch';
                if (toState.data && toState.data.pageTitle) {
                    title = toState.data.pageTitle;
                }
                // Set asynchronously so page changes before title does
                $timeout(function() {
                    element.text(title);
                });
            };

            $rootScope.$on('$stateChangeStart', listener);
        }
    }
}]);