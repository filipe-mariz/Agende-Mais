var agendeMais = angular.module('medServices', ['mentio', 'angularMoment', 'ngFileUpload', 'ui.calendar', 'ui.bootstrap', 'ui.mask', 'ui.router', 'ui.utils.masks', 'dndLists', 'ui.select', 'monospaced.elastic', 'rzModule', 'ngResource']);

agendeMais.config(function($stateProvider) {

    $stateProvider.state('index' , {
        url: '/index',
        views: {
            '': {
                templateUrl: 'views/index.html',
                controller: 'indexCtrl'
            }
        }
    }) 
});