const express = require("express");
const router = express.Router();

const { InfoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");

router.get("/info", InfoController.info);
router.use("/airplane", airplaneRoutes);

module.exports = router;
