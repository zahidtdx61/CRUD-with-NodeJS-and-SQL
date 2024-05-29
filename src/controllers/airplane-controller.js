const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { error } = require("winston");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

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

    SuccessResponse.message = "Successfully created an airplane";
    SuccessResponse.data = airplane;

    return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while creating an airplane";
    ErrorResponse.error = {explanation: error.name};
    
    return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
};
