angular.module('learningServices')
  .service('firstService', function() {
    return {
      sayHi: function(){
        return "Hello Bitch!"
      },
      sayGoodbye: function(){
        return "Hasta la vista...babeh"
      }
    }
});
