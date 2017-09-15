'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Products', [{
        name: 'Aspirateur',
        description: 'Dyson',
        price: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Globe',
        description: 'Un globe terrestre à poser sur la table',
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vélo',
        description: 'blablabla',
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', [
      { name: 'Aspirateur' },
      { name: 'Globe' },
      { name: 'Vélo' }
    ]);
  }
};