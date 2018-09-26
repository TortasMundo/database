exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stores')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('stores').insert([
        {
          manager_name: 'Alonso Ayala Ortega',
          manager_phone_number: '6823133323',
          manager_email: 'alayor3@gmail.com',
          address_1: 'Gonzalez Ortega 649',
          address_2: '',
          city: 'Camargo',
          state: 'Chihuahua',
          country: 'Mexico',
          zip_code: '33700',
          latitude: '27.691241',
          longitude: '-105.1717484',
          email: 'store1@tortasmundo.com',
        },
      ])
    })
}
