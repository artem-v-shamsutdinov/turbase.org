import Koa from 'koa'
import Router from 'koa-router'
import { createWriteStream } from "fs";

const serve = require('koa-static')

const app = new Koa()
const router = new Router()

router.post('/blog', (_ctx, _next) => {

})

router.post('/code', (_ctx, _next) => {

})

router.post('/contact', (_ctx, _next) => {

})

router.post('/learnRevenue', (_ctx, _next) => {

})

router.post('/learnSecurity', (_ctx, _next) => {

})

router.post('/load', (_ctx, _next) => {

})

router.post('/subscribe', (_ctx, _next) => {

})

router.get('/test', (_ctx, _next) => {

})

app.use(async ctx => {
  if(ctx.is("blog")) {
    
  } else if(ctx.is("code")) {
    
  } else if(ctx.is("contact")) {
    
  } else if(ctx.is("learnRevenue")) {

  } else if(ctx.is("learnSecurity")) {

  } else if(ctx.is("load")) {

  } else if(ctx.is("subscribe")) {
    
  } else if(ctx.is("test")) {
    
  } else if(ctx.is("")) {
    
  } else if(ctx.is("/")) {
    
  } else if(ctx.is("index.html")) {
    
  }
  ctx.body = 'Hello World';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

export default app;
