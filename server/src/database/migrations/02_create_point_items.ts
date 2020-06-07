import Knex from 'knex';

export async function up(knex: Knex) {
  //upgrade
  return knex.schema.createTable('point_items', (table) => {
    table.increments('id').primary();

    table.integer('point_id').notNullable().references('id').inTable('points');
    table.integer('item_id').notNullable().references('id').inTable('items');
  });
}

export async function down(knex: Knex) {
  //downgrade
  return knex.schema.dropTable('point_items');
}
