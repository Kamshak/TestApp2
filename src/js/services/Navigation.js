angular.module('NavigationService', ['ui.router'])


.factory('Navigation', function($state, $location){
    var navService = {};

    navService.items = [{
        icon: 'fa-star',
        sref: 'mitarbeiter-des-monats',
        label: 'Mitarbeiter des Monats'
    },{
        icon: 'fa-smile-o',
        sref: 'home',
        label: 'Gude Laune'
    }];
    navService.getBottomMenuItems = function() {
        return this.items;
    };
    
    return navService;
});