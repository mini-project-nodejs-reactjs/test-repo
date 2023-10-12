'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('types', [
      {
        typeName: 'Backlog',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeName: 'Development',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeName: 'In Testing',
        createdAt: new Date(),
        updatedAt:   new Date()
      },
      {
        typeName: 'Done',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('types', null, {});
  }
};
