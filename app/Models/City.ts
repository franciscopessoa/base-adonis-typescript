import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import State from './State'

export default class City extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public ibge: number

  @column()
  public uf_id: number

  @belongsTo(() => State, {
    localKey: 'id',
    foreignKey: 'uf_id',
  })
  public state: BelongsTo<typeof State>

  @column()
  public active: boolean
}
