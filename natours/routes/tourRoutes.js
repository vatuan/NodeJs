const express = require("express");
const tourController = require("../controllers/tourController");

const router = express.Router();

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route("/top-3-cheap")
  .get(tourController.aliasTopTours, tourController.getAllTours);

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
