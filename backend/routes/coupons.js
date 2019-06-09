const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon");
let count = 0;

// ROUTES
// Get all Coupons -> /api/areacode/storename/offers/coupons
// Add a new Coupon -> /api/areacode/storename/offers/add
// Update the Coupon -> /api/areacode/storename/offers/:id
// Delete a Coupon -> /api/areacode/storename/offers/:id



//This route gets all the stored coupons from the database and renders it.

router.get("/coupons", (req, res) => {
  Coupon.findAll()
    .then( (result) => {
      console.log((result));
      res.json(result)});
    // .catch(res.send("There are no offers at the moment !!!"));
});

//This route is used to add new coupons to the database.
router.post("/add", (req, res) => {
  let {
    image,
    productDescription,
    offerDescription,
    startDate,
    endDate
  } = req.body;
  let errors = [];

  if (!image) {
    errors.push({ text: "Please submit an image" });
  }

  if (!productDescription) {
    errors.push({ text: "Please submit a Product Details" });
  }

  if (!offerDescription) {
    errors.push({ text: "Please submit an Offer Details" });
  }

  if (!startDate) {
    errors.push({ text: "Please provide a start date" });
  }

  if (!endDate) {
    errors.push({ text: "Please provide an end date" });
  }

    console.log(req.body);

  if (errors.length > 0) {
    res.json({
      errors,
      image,
      productDescription,
      offerDescription,
      startDate,
      endDate
    });
  } else {
        Coupon.create({
          image : image,
          productDescription : productDescription,
          offerDescription : offerDescription,
          startDate : startDate,
          endDate : endDate
        })
      .then(() => res.json("Object Added"))
      .catch(err => console.log(err));
  }
});

//This route is used to update the coupon in the database.
router.put("/:id", (req, res) => {
  let {
    image,
    productDescription,
    offerDescription,
    startDate,
    endDate
  } = req.body;
  Coupon.update(
    { 
      image: image,
      productDescription: productDescription,
      offerDescription: offerDescription,
      startDate: startDate,
      endDate: endDate
    },
    {
      where: {
        id : req.params.id
      }
    })
    .then(() => {
      res.json("The object has been updated!!!");
    })
    .catch(err => console.log(err));
});


//This route is used to delete a coupon from the database.
router.delete("/:id", (req, res) => {
  Coupon.destroy({
    where: {
      id: req.params.id
    }
  }).then( (result) => res.json(result));
});

module.exports = router;
