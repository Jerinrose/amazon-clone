const functions = require('firebase-functions');

const express=require("express");
const cors=require("cors");
const stripe = require("stripe")("sk_test_51I7wkwJdyIA8z4prupnRkx7Gp01y7eNTEJabBONz9IdblJzgkDVV0OlqaxgLETAewMR2jTG4yyq5TbnPEMvWJmEm00SJg8rWdM");


const app=express();

app.use(cors({origin:true}));
app.use(express.json());

app.get("/",(request,response) => response.status(200).send('hello'))

app.post('/payments/create',async(request,response) =>{
      const total =request.query.total;
      console.log("payment req recieved",total);

      const paymentIntent =await stripe.paymentIntents.create({
            amount:total,
            currency:'inr',
            payment_method_types: ['card'],
      });

      response.status(201).send({
            clientSecret:paymentIntent.client_secret,
      })
})

exports.api=functions.https.onRequest(app);