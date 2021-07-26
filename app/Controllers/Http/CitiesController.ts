import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { handleErrorResponse, noContent, success, validationError } from 'App/Helpers/HttpResponses'
import CitiesService from 'App/Services/CItiesService'
import ActivateCityValidator from 'App/Validators/Http/Cities/ActivateCityValidator'
import GetCitiesValidator from 'App/Validators/Http/Cities/GetCitiesValidator'

export default class CitiesController {
  public async show({ request, response }: HttpContextContract) {
    try {
      await request.validate(GetCitiesValidator)
    } catch (e) {
      return validationError(response, e.messages.errors)
    }

    try {
      const { filter, page = 1, limit = 100 } = request.all()
      const cities = await new CitiesService().getCities(page, limit, filter)
      return success(response, cities)
    } catch (e) {
      return handleErrorResponse(response, e)
    }
  }

  public async activate({ request, response }: HttpContextContract) {
    try {
      await request.validate(ActivateCityValidator)
    } catch (e) {
      return validationError(response, e.messages.errors)
    }

    try {
      const active = request.input('active')
      const cityId = request.param('id')
      await new CitiesService().activateCity(cityId, active)
      return noContent(response)
    } catch (e) {
      return handleErrorResponse(response, e)
    }
  }
}
