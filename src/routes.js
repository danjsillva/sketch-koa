import Router from 'koa-router'

import ConnectionMiddleware from "./middlewares/ConnectionMiddleware";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import AuthController from "./controllers/AuthController";

const router = new Router({ prefix: '/:empresa' })
	.param('empresa', (empresa, ctx, next) => {
        ctx.empresa = empresa;

        return next();
    })

router.get("/", ConnectionMiddleware, ctx => ctx.body = `Hello, ${ctx.empresa}!`);

// router.post("/auth/signup", AuthController.signup);
router.post("/auth/login", AuthController.login);
// router.get("/auth/login", AuthMiddleware, AuthController.check);

export default router.routes();