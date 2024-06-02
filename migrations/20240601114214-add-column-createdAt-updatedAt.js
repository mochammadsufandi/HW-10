'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    
    await queryInterface.addColumn('movies', 'createdAt', {
      type : Sequelize.DataTypes.DATE
    });
    await queryInterface.addColumn('movies', 'updatedAt', {
      type : Sequelize.DataTypes.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('movies', 'createdAt');
    await queryInterface.removeColumn('movies', 'updatedAt');
  }
};
