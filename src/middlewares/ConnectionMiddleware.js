import Database from '../config/Database'

const ConnectionMiddleware = async (ctx, next) => {
  try {
    const connection = Database.connections[ctx.empresa]

    // await connection.authenticate();
    // console.log('Connection has been established successfully.');
    
    ctx.connection = connection
  } catch (error) {
    throw {
      status: 400,
      code: "INVALID_CONNECTION",
      message: "Variável de conexão inválida"
    };
  }

  await next();
};

export default ConnectionMiddleware;