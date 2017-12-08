angular.module("todoApp", []).controller('TodoController', function() {
   var todolist = this;
   todolist.todos = [
       {text: 'learn angular', done: false},
       {text: 'build an angular app', done: false},
       {text: 'watch John do nothing', done: false}];

   todolist.remaining = function() {
       var count = 0;
       angular.forEach(todolist.todos, function(todo) {
           count += todo.done ? 0 : 1;
       });
       return count;
   };

   todolist.addTodo = function() {
       todolist.todos.push({text:todolist.todoText, done: false});
       todolist.todoText = '';
   };

   todolist.archive = function() {
       var oldTodos = todolist.todos;
       todolist.todos = [];
       angular.forEach(oldTodos, function(todo) {
          if (!todo.done) todolist.todos.push(todo);
       });
   }
});
