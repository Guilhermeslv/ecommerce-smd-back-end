import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {

    public async index() {

        const user = await User.all()

        return {
            data: user,
        }
    }

    public async store({request, response}: HttpContextContract) {

        const body = request.body();

        const user = await User.create(body)

        response.status(201)

        return {
            Message: 'Usuário criado com sucesso!',
            data: user,
        }
    }

    public async show({ params }: HttpContextContract) {

        const user = await User.findOrFail(params.id)

        return {
            data: user,
        }
    }

    public async update({ params, request }: HttpContextContract) {

        const body = request.body()

        const user = await User.findOrFail(params.id)

        user.name = body.name
        user.address = body.address
        user.email = body.email
        user.username = body.username
        user.password = body.password

        user.save()

        return {
            msg: 'Usuário atualizado com sucesso!',
            data: user
        }
    }

    public async destroy({ params }: HttpContextContract) {

        const user = await User.findOrFail(params.id)

        await user.delete()

        return {
            message: "Usuário excluído com sucesso",
            data: user,
        }
    }

}
