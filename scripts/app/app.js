/**
 * Created by georginaHughes on 13/09/2014.
 */
lunchPlannerApp = angular.module('lunchPlanner', ['ui.router']);

lunchPlannerApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/landing');

    $stateProvider
        .state('registerUser', {
            url: '/registerUser',
            templateUrl: 'partials/registerUser/index.html',
            controller: 'registerUserCtrl'
        })
        .state('registerTeam', {
            url: '/registerTeam',
            templateUrl: 'partials/registerTeam/index.html',
            controller: 'registerTeamCtrl'
        })
        .state('joinTeam', {
            url: '/joinTeam',
            templateUrl: 'partials/joinTeam/index.html',
            controller: 'joinTeamCtrl'
        })
        .state('planMeal', {
            url: '/plan',
            templateUrl: 'partials/planMeal/index.html',
            controller: 'planMealCtrl'
        })
        .state('joinMeal', {
            url: '/joinMeal',
            templateUrl: 'partials/joinMeal/index.html',
            controller: 'joinCtrl'
        });
});