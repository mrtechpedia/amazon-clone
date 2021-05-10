const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IIBDICoq3pwXgCzKqWrN3K1D1ayV2t5zoen4rQwNl9hfKkkJl6FtSpSCAvR9aRzPaouamEwEtRKO94mlzkchQ8300IDZC4vK6"
);

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits
    currency: "inr",
    description: "Software development services",
  });

  const customer = await stripe.customers.create({
    name: "Customer",
    address: {
      line1: "Unknown",
      postal_code: "151001",
      city: "Bathinda",
      state: "Punjab",
      country: "IN",
    },
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-e3ab9/us-central1/api
