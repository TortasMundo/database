
exports.up = function(knex, Promise) {
  const statuses = ['ORDERED', 'COOKING', 'DELIVERING', 'ARRIVED', 'DELIVERED', 'CANCELED_BY_CUSTOMER', 'CANCELED_BY_DELIVERER']

  return knex.schema.createTable('orders', table => {
    table.increments('id').primary().unsigned().notNullable()
    table.string('customerCode').notNullable()
    table.string('delivererId').notNullable()
    table.string('jamonQuantity').notNullable()
    table.string('lomoQuantity').notNullable()
    table.string('especialQuantity').notNullable()
    table.string('refrescosQuantity').notNullable()
    table.string('total').notNullable()
    table.enu('status', statuses).notNullable().defaultTo('STARTED')
    table.boolean('paidOnline').notNullable().defaultTo(false)
    table.string('paymentId')
    table.string('customerLocationLatitude').notNullable()
    table.string('customerLocationLongitude').notNullable()
    table.string('delivererLocationLatitude').notNullable()
    table.string('delivererLocationLongitude')
    table.string('notes')
    table.timestamp('orderedAt').notNullable().defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('orders')
};
