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

import Route from '@ioc:Adonis/Core/Route'
import PostingsController from "App/Controllers/Http/PostingsController";

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/Movies', new PostingsController().getAll)
Route.get('/Movies/:id', new PostingsController().getOne)
Route.post('/Movies', new PostingsController().add)
Route.patch('/Movies/:id', new PostingsController().edit)
Route.delete('/Movies/:id', new PostingsController().delete)
