angular.module('Cordova', [])

.factory('deviceReady', function($q, $rootScope) {

    return $q(function(resolve, reject) {
        var done = function() {
            resolve();
        };

        if (typeof window.cordova === 'object') {
            document.addEventListener('deviceready', function() {
                done();
            }, false);
        }
        else {
            setTimeout(done, 1000);
        }
    });
});