angular.module('Svenpanel.controllers.Main', ['Cordova'])

.controller('MainController', function($scope, deviceReady){
  $scope.buttons = [
      {text: "1,2,3 Gude Laune!", sound: "sound24.mp3"},
      {text: "Hier Laune", sound: "sound25.mp3"},
      {text: "Gude Laune", sound: "sound20.mp3"},
      {text: "Laune OK", sound: "sound26.mp3"},
      {text: "All about Laune", sound: "sound40.mp3"},
    ];
    
    deviceReady.then(function(){
      for(var i = 0; i < $scope.buttons.length; i++) {
        var src = "";
        if (angular.isDefined(window.cordova)) {
          
          if (device.platform.toLowerCase() == 'android') {
            src = "/android_asset/www/";
          }
          
          src = src + $scope.buttons[i].sound;
          console.log(src);
        }
        
        $scope.buttons[i].media = new String(src, console.log.bind(console), console.error.bind(console));
      }
    });
});