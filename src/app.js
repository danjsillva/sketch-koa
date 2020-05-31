import Koa from "koa";
import BodyParser from "koa-bodyparser";
import Dotenv from "dotenv";

import ErrorMiddleware from "./middlewares/ErrorMiddleware";
import Database from './config/Database'
import Routes from "./routes";

console.time()

Dotenv.config();
Database.connect();

const app = new Koa();

app.use(BodyParser());
app.use(ErrorMiddleware);
app.use(Routes);

console.timeEnd()
export default app;
