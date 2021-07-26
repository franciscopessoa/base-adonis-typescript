import Database from '@ioc:Adonis/Lucid/Database'
import City from 'App/Models/City'

export default class CitiesRepository extends City {
  constructor() {
    super()
  }

  public async getCities(page: number, limit: number, filter: string | null): Promise<object> {
    return await Database.from('cities')
      .join('states', 'uf_id', '=', 'states.id')
      .select(
        'cities.id',
        'cities.name',
        'active',
        'uf_id',
        'states.name as state',
        'uf',
        Database.raw("CONCAT(states.name, ' / ' , states.uf) as city")
      )
      .if(filter, (query) => {
        query.where('cities.name', 'ilike', `%${filter}%`)
        query.orWhere('states.name', 'ilike', `%${filter}%`)
        query.orWhere('states.uf', 'ilike', `%${filter}%`)
      })
      .paginate(page, limit)
    // return await City.query()
    //   .leftJoin('states', 'uf_id', '=', 'states.id')
    //   .select(
    //     'cities.id',
    //     'cities.name',
    //     'cities.active',
    //     'cities.uf_id',
    //     'states.name as state',
    //     'states.uf',
    //     Database.raw("CONCAT(states.name, ' / ' , states.uf) as city")
    //   )
    //   .if(filter, (query) => {
    //     query.where('cities.name', 'ilike', `%${filter}%`)
    //     query.orWhere('states.name', 'ilike', `%${filter}%`)
    //     query.orWhere('states.uf', 'ilike', `%${filter}%`)
    //   })
    //   .paginate(page, limit)
  }

  public async activateCity(cityId: number, active: boolean): Promise<object> {
    const city = await Database.from('cities')
      .where('id', cityId)
      .update({ active: active }, ['id', 'name', 'active'])
    return city
  }

  public async cityExists(cityId: number): Promise<boolean> {
    const cityExists = await Database.from('cities').where('id', cityId).first()
    return cityExists ? true : false
  }
}
