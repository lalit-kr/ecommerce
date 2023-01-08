const router = require("express").Router();
const STRIPE_KEY =
  "sk_test_51LeYHLSAKAfa8cAbF56gH07FQUcfg9CYlzfdtFHjnesnQsD0uTzmmN4Oul9husJr9gIeOZ2NwEXh7IJRRX7OuyCi00neYhVRWi";
const stripe = require("stripe")(STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
