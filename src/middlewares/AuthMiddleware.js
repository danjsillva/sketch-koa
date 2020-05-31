import JWT from "jsonwebtoken";

const AuthMiddleware = async (ctx, next) => {
  if (!ctx.request.header || !ctx.request.header.authorization)
    throw {
      status: 401,
      code: "INVALID_TOKEN",
      message: "Token de autenticação é obrigatório"
    };

  const [, token] = ctx.request.header.authorization.split(" ");

  try {
    ctx.auth = {
      token,
      id: JWT.verify(token, process.env.JWT_SECRET)
    };
  } catch (error) {
    throw {
      status: 401,
      code: "INVALID_TOKEN",
      message: "Token de autenticação inválido"
    };
  }

  await next();
};

export default AuthMiddleware;