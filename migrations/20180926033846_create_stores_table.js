
exports.up = function(knex, Promise) {

  return knex.schema.createTable('stores', table => {
    table.increments('id').primary().unsigned().notNullable()
    table.string('manager_name').notNullable()
    table.string('manager_phone_number').notNullable()
    table.string('manager_email').notNullable()
    table.string('address_1').notNullable()
    table.string('address_2').notNullable()
    table.string('city').notNullable()
    table.string('state').notNullable()
    table.string('country').notNullable()
    table.string('zip_code').notNullable()
    table.string('latitude').notNullable()
    table.string('longitude').notNullable()
    table.string('email').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stores')
};
