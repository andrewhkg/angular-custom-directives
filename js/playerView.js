angular.module('CardsAgainstAssembly')
 .directive('scores', playerView);

 function playerView () {
   var directive = {};
   directive.restrict = 'E';
   directive.replace = true;
   directive.templateUrl = "_playerView.html";
   directive.scope = {
    participants: '='
   };
   return directive;
 }
