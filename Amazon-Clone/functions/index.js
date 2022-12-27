const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  'sk_test_51KOQduSGmnjRVw8ze9KtwZuwjbfNcmDVtleKW7hGYOUVwpN459JYC4NHknAjvmZfeI9j4J3pD2tSKkVgkq6kM0cb00fliXpeWd'
);

//API

// - App config
const app = express();

// - Middleares
app.use(cors({ origin: true }));
//send data and parse json data
app.use(express.json());
// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request receieved Boom!! for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });
  console.log(paymentIntent);
  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//firebase emulators:start
