const { StatusCodes } = require("http-status-codes");
const { error } = require("winston");
const { ErrorResponse } = require("../utils/common");

const validateCreateRequest = (req, res, next) => {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Something went wrong while creating airplane!!!";
    ErrorResponse.error = {
      explanation:
        "Model Number not found in the incoming request in correct form.",
    };

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
};

module.exports = { validateCreateRequest };
