angular.module('Svenpanel.controllers.Main', ['fsCordova'])

.controller('MainController', function($scope, CordovaService){
  $scope.buttons = [
      {text: "1,2,3 Gude Laune!", sound: "sound24.mp3"},
      {text: "Hier Laune", sound: "sound25.mp3"},
      {text: "Gude Laune", sound: "sound20.mp3"},
      {text: "Laune OK", sound: "sound26.mp3"},
      {text: "All about Laune", sound: "sound40.mp3"},
    ];
    
    CordovaService.ready.then(function(){
      for(var i = 0; i < $scope.buttons.length; i++) {
        var src = "";
        if (angular.isDefined(window.cordova) || true) {
          
          if (device.platform.toLowerCase() == 'android' || true) {
            src = "/android_asset/www/audio/";
          }
          
          src = src + $scope.buttons[i].sound;
        }
        
        $scope.buttons[i].media = new Media(src, console.log.bind(console), console.error.bind(console));
        console.log($scope.buttons[i].media);
        
      }
    });
});