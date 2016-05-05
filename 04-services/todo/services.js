app.service('todoService', function(){
  var todoList = [];
  return {
    getTodos: function() {
      return todoList;
    },
    addTodo: function(todo) {
      todoList.push(todo)
      editFormShowing = false;
    },
    editTodo: function(i, todo) {
       todoList[i].task = todo.task
       todoList[i].editFormShowing = false;
    },
    deleteTodo: function(i) {
      todoList.splice(i, 1)
    }
  }
})
