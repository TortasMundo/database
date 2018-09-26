
exports.up = function(knex, Promise) {
  const statuses = ['ORDERED', 'COOKING', 'COOKED', 'DELIVERING', 'ARRIVED', 'DELIVERED', 'CANCELED_BY_CUSTOMER', 'CANCELED_BY_DELIVERER']

  return knex.schema.createTable('orders', table => {
    table.increments('id').primary().unsigned().notNullable()
    table.string('code').notNullable()
    table.string('customer_code').notNullable()
    table.string('deliverer_id').notNullable()
    table.string('store_id').notNullable()
    table.string('jamon_quantity').notNullable()
    table.string('lomo_quantity').notNullable()
    table.string('especial_quantity').notNullable()
    table.string('refrescos_quantity').notNullable()
    table.string('total').notNullable()
    table.enu('status', statuses).notNullable().defaultTo('ORDERED')
    table.boolean('paid_online').notNullable().defaultTo(false)
    table.string('payment_id')
    table.string('customer_location_latitude').notNullable()
    table.string('customer_location_longitude').notNullable()
    table.string('notes')
    table.timestamp('ordered_at').notNullable().defaultTo(knex.fn.now())

    table.unique('code')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('orders')
};
