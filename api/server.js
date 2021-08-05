const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let users = [
	{
		username : "sanjay",
		password: "123"
	},
	{
		username : "AjajPatel",
		password: "123"
	},
	{
		username : "Heena",
		password: "123"
	}
];

app.post('/login', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const index = users.findIndex((user) => user.username == username && user.password == password);
	if(index<0){
		res.status( 401 )
	}
	return res.send((index > -1)?{username:users[index].username,loggedIn: true}:{});
});
const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));
