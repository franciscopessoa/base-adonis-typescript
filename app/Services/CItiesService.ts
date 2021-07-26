import { Exception } from '@poppinss/utils'
import CitiesRepository from 'App/Repository/Cities/CitiesRepository'

export default class CitiesService {
  public async getCities(page: number, limit: number, filter: string | null): Promise<object> {
    const repository = new CitiesRepository()
    return repository.getCities(page, limit, filter)
  }

  public async activateCity(cityId: number, active: boolean): Promise<object> {
    const repository = new CitiesRepository()

    const cityExists = await repository.cityExists(cityId)
    if (cityExists) {
      return await repository.activateCity(cityId, active)
    }
    throw new Exception('Cidade inexistente na base de dados', 400)
  }
}
