/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.resource("/user", "UsersController").apiOnly();
  Route.resource("/product", "ProductsController").apiOnly();
  Route.resource("/category", "CategoriesController").apiOnly();

  //Sales routes
  Route.post("/user/:userId/sale/cad", "SalesController.store");
  Route.get("/user/:userId/sale/get", "SalesController.show");

  Route.get("/sale", "SalesController.index");
}).prefix("/api");
