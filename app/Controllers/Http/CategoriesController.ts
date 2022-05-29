import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Category from "App/Models/Category";

export default class CategoriesController {
  public async index() {
    const categories = await Category.query();
    return {
      data: categories,
    };
  }
  public async store({ request, response }: HttpContextContract) {
    const body = request.body();
    const category = await Category.create(body);
    response.status(201);
    return {
      Message: "Categoria criada com sucesso!",
      data: category,
    };
  }
  public async show({ params }: HttpContextContract) {
    const category = await Category.findOrFail(params.id);
    return {
      data: category,
    };
  }
  public async update({ request, params }: HttpContextContract) {
    const body = request.body();
    const category = await Category.findOrFail(params.id);

    category.name = body.name;

    category.save();
    return {
      msg: "Categoria atualizada com sucesso!",
      data: category,
    };
  }
  public async destroy({ params }: HttpContextContract) {
    const category = await Category.findOrFail(params.id);
    category.delete();
    return {
      msg: "Categoria apagada com sucesso!",
      data: category,
    };
  }
}
