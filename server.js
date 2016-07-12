var express = require('express');
var app= express();
var PORT= process.env.PORT || 3000;
var todos= [{

id: 1,
description: 'Meet mom for lunch oh no',
completed: false
}, {
	id: 2,
	description: 'Go to market heroku',
	completed: false
	}, {
	id: 3,
	description: 'Feed to cat',
	completed: true

}];

app.get('/', function (req, res){
res.send('Todo API Root');


});
//GEt todo
app.get('/todos', function(req, res){
	res.json(todos);
});

app.get('/todos/:id', function (req, res){
	var todoId = parseInt(req.params.id, 10);
	var matchTodo;
	todos.forEach(function(todo){
     if(todoId== todo.id){

     	matchTodo= todo;
     }

	});

	if(matchTodo){

		res.json(matchTodo);
	}else{

		res.status(404).send();
	}

	res.send('Asking for todo with the id of ' +req.params.id+ ' !')
});


app.listen(PORT, function(){

console.log('Express listening on port' +PORT+ '');
});