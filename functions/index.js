const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Hyv9pHUQEfoevvCryILsig7pHdAaZvODYk74S30PXimt4ukYm9zMefZ5nKa1ANU4p7HfhtJOOefA70mt0RIXcBQ006KtdPzmt");

// -API

// -App config 
const app =express();

// -middleware
app.use(cors({origin: true}));
app.use(express.json());

// -API routescd 
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async(request, response) =>{
	const total = request.query.total;
	console.log("payment request received ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "INR",
	});

	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	})
})

// -listed command

exports.api = functions.https.onRequest(app)


//http://localhost:5001/reactjs-54304/us-central1/api