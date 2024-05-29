const { StatusCodes } = require("http-status-codes");
const { error } = require("winston");

const validateCreateRequest = (req, res, next) => {
  if (!req.body.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: false,
      message: "Something went wrong while creating airplane!!!",
      data: {},
      error: {
        explanation:
          "Model Number not found in the incoming request in correct form.",
      },
    });
  }

  next();
};

module.exports = {validateCreateRequest};
