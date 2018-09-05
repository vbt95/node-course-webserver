// lecture 41
const express = require('express');

var app = express();

app.get('/', (req,res) =>{
	//res.send('Hello express!');
	//res.send('<h1>Hello express!<h1>');
	const ob={
		name : 'Vaibhav',
		hobby : 'coding'
	};
	res.send(ob);
});

app.get('/about', (req,res) =>{
	res.send('About page');
});

app.get('/bad', (req,res) =>{
	res.send({
		errorMessage : 'Shit some error happened'
		});
});
app.listen(3000);