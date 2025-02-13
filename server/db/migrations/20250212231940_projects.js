/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id')
    table.string('type')
    table.string('project_name')
    table.string('skills')
    table.string('description')
    table.string('focus_features')
    table.string('url')
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('projects')
  
};


