// Set up mongoose connection
const mongoose = require('mongoose');
let database_url =
	'mongodb+srv://mudra:Mudra%40123@cluster0.8vr2i.mongodb.net/mernstack?retryWrites=true&w=majority';

// Connecting to the database
mongoose
	.connect(database_url, {
		keepAlive: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Successfully connected to the database');
	})
	.catch((err) => {
		console.log('Could not connect to the database. Exiting now...', err);
		process.exit();
	});

module.exports = mongoose.connection;
