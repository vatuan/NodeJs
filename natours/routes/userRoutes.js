const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);

// router
//   .route("/top-3-cheap")
//   .get(tourController.aliasTopTours, tourController.getAllTours);

// router.route("/tour-stats").get(tourController.getTourStats);
// router.route("/monthy-plan/:year").get(tourController.getMonthyPlan);
// router
//   .route("/:id")
//   .get(tourController.getTour)
//   .patch(tourController.updateTour)
//   .delete(tourController.deleteTour);

module.exports = router;