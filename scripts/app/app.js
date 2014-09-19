/**
 * Created by georginaHughes on 13/09/2014.
 */
lunchPlannerApp = angular.module('lunchPlanner', ['ui.router']);

lunchPlannerApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('registerUser', {
            url: '/registerUser',
            templateUrl: 'html/release/partials/registerUser/index.html',
            controller: 'registerUserCtrl',
            data: {
                pageTitle: 'Register User - Lunch Planner for Teams that Lunch'
            }
        })
        .state('registerTeam', {
            url: '/registerTeam',
            templateUrl: 'html/release/partials/registerTeam/index.html',
            controller: 'registerTeamCtrl',
            data: {
                pageTitle: 'Register Team - Lunch Planner for Teams that Lunch'
            }
        })
        .state('joinTeam', {
            url: '/joinTeam',
            templateUrl: 'html/release/partials/joinTeam/index.html',
            controller: 'joinTeamCtrl',
            data: {
                pageTitle: 'Join Team - Lunch Planner for Teams that Lunch'
            }
        })
        .state('planMeal', {
            url: '/planMeal',
            templateUrl: 'html/release/partials/planMeal/index.html',
            controller: 'planMealCtrl',
            data: {
                pageTitle: 'Plan Meal - Lunch Planner for Teams that Lunch'
            }
        })
        .state('joinMeal', {
            url: '/joinMeal',
            templateUrl: 'html/release/partials/joinMeal/index.html',
            controller: 'joinCtrl',
            data: {
                pageTitle: 'Join Meal - Lunch Planner for Teams that Lunch'
            }
        });
}]);