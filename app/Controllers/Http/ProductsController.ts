import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product';

export default class ProductsController {

    public async index() {
        const product = await Product.all()

        return {
            data: product,
        }
    }

    public async store({request, response}: HttpContextContract) {

        const body = request.body();

        const product = await Product.create(body)

        response.status(201)

        return {
            Message: 'Produto criado com sucesso!',
            data: product,
        }
    }

    public async show({ params }: HttpContextContract) {

        const product = await Product.findOrFail(params.id)

        return {
            data: product,
        }
    }

    public async update({request, params}: HttpContextContract) {
        const body = request.body()

        const product = await Product.findOrFail(params.id)

        product.name = body.name
        product.description = body.description
        product.price = body.price
        product.picture = body.picture
        product.quantity = body.quantity

        product.save()

        return {
            msg: 'Produto atualizado com sucesso!',
            data: product
        }
    }

    public async destroy({ params }: HttpContextContract) {

        const product = await Product.findOrFail(params.id)

        await product.delete()

        return {
            message: "Produto excluído com sucesso",
            data: product,
        }
    }

}
