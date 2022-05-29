import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sale from 'App/Models/Sale'
import User from 'App/Models/User'

export default class SalesController {

    public async index() {

        const sale = await Sale.all()

        return {
            data: sale,
        }
    }

    public async store({request, params, response}: HttpContextContract) {

        const body = request.body();

        await User.findOrFail(params.userId)

        body.userId = params.userId

        const sale = await Sale.create(body)

        response.status(201)

        return {
            Message: 'Venda cadastrada com sucesso!',
            data: sale,
        }
    }

    public async show({ params }: HttpContextContract) {

        const sale = await Sale.findOrFail(params.userId)

        return {
            data: sale,
        }
    }

    public async update() {}

    public async destroy({ params }: HttpContextContract) {

        const sale = await Sale.findOrFail(params.userId)

        await sale.delete()

        return {
            message: "Venda excluído com sucesso",
            data: sale,
        }
    }

}
