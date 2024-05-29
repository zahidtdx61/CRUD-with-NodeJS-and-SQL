const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { error } = require("winston");

/***
 * POST: /airplanes
 * req-body {modelNumber: 'air-bd420', capacity: 200}
 */
async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    return res
            .status(StatusCodes.CREATED)
            .json({
              success: true,
              message: "Successfully created an airplane",
              data: airplane,
              error: {},
            });
  } catch (error) {
    console.log(error);
    return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
              success: false,
              message: 'Something went wrong while creating an airplane',
              data: {},
              error: error.name,
            })
  }
}

module.exports = {
  createAirplane,
};
