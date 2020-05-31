const ErrorMiddleware = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);

    ctx.status = error.status || 500;
    ctx.body = {
      status: error.status || 500,
      code: error.code || "INTERNAL_SERVER_ERROR",
      message: error.message || "Ocorreu um erro inesperado"
    };
  }
};

export default ErrorMiddleware;