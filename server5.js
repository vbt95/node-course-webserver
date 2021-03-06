// for lecture 45
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear', () =>{
	return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text)=>{
	return text.toUpperCase();
});



app.set('view engine','hbs')

/*app.use((req,res,next) =>{
	res.render('maintenance.hbs');
});*/


app.use(express.static(__dirname+'/public'));

app.use((req,res,next) =>{
	var now= new Date().toString();
	var log = `${now} : ${req.method} ${req.url}`;
	
	fs.appendFile('server.log',log+'\n', (err) =>{
	if(err){
		console.log('Unable to append to server log');	
	}
	});
	console.log(log);
	next();
});


app.get('/', (req,res) =>{
	res.render('home.hbs',{
		pageTitle : 'Home Page'
		,welcomeMessage : 'Welcome to our website'
	});
});

app.get('/about', (req,res) =>{
	res.render('about.hbs',{
		pageTitle : 'About Page'
	});
});

app.get('/bad', (req,res) =>{
	res.send({
		errorMessage : 'Shit some error happened'
		});
});

app.get('/test/:id', (req,res) =>{
	res.send(req.params.id);
});


app.listen(port, () =>{
	console.log(`Server is up at ${port}`);
});