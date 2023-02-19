import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Posting from "App/Models/Posting";
import PostingValidator from "App/Validators/PostingValidator";

export default class PostingsController {

  public async getAll({response}:HttpContextContract) {
    let movies = await Posting.all()
    return response.ok(movies)
  }

  public async getOne({request, response}:HttpContextContract) {
    let payload = await request.params()
    let movies = await Posting.findOrFail(payload.id)
    return response.ok(movies)
  }

  public async add({request, response}:HttpContextContract) {
    let movies = await request.validate(PostingValidator)
    const posting = new Posting()
    posting.title = movies.title
    posting.description = movies.description
    posting.rating = movies.rating
    posting.image = movies.image
    await posting.save()
    return response.ok(posting)
  }

  public async edit({request, response}:HttpContextContract) {
    let id = await request.params().id
    let movies = await request.body()
    const posting = await Posting.findOrFail(id)
    posting.title = movies.title
    posting.description = movies.description
    posting.rating = movies.rating
    posting.image = movies.image
    await posting.save()
    return response.ok(posting)
  }

  public async delete({request, response}:HttpContextContract) {
    let id = await request.params().id
    const posting = await Posting.findOrFail(id)
    await posting.delete()
    return response.ok(posting)
  }
}
