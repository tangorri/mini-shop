'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        email: 'antoine@email.com',
        password: 'antoine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'tarik@email.com',
        password: 'tarik',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'jean@email.com',
        password: 'jean',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'anthony@email.com',
        password: 'anthony',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [
      { email: 'antoine@email.com' },
      { email: 'tarik@email.com' },
      { email: 'jean@email.com' },
      { email: 'anthony@email.com' }
    ]);
  }
};