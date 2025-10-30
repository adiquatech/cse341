//Require
const routes = require('express').Router();
const controller = require('../controller/index.js')

//Routes
routes.get('/', controller.homeRoute);
routes.get('/dashboard', controller.dashboardRoute);
routes.get('/contact', controller.contactRoute);
routes.get('/about', controller.aboutRoute);


module.exports = routes;