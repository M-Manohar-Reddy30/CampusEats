const successResponse = (
  res,
  {
    statusCode = 200,
    message = "Success",
    data = null,
    meta = null,
  } = {}
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    meta,
    errors: null,
  });
};

const errorResponse = (
  res,
  {
    statusCode = 500,
    message = "Something went wrong",
    errors = null,
  } = {}
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    data: null,
    meta: null,
    errors,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};