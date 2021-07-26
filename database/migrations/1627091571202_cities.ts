import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cities extends BaseSchema {
  protected tableName = 'cities'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 100).notNullable().index()
      table.integer('ibge', 7).notNullable()
      table.integer('uf_id', 2).references('id').inTable('states').notNullable()
      table.boolean('active').defaultTo(false)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
