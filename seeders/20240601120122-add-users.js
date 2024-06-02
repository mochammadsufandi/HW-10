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
   await queryInterface.bulkInsert('users', [
      {
        email : 'dwi09putra@mhs.its.id',
        gender : 'Male',
        password : 'Andigtg256',
        role : 'Electrician',
        createdAt : new Date,
        updatedAt : new Date
      },
      {
        email : 'sugianto15@gmail.com',
        gender : 'Male',
        password : 'sugikz123',
        role : 'Teacher',
        createdAt : new Date,
        updatedAt : new Date
      },
      {
        email : 'dsutuno12@org.id',
        gender : 'Male',
        password : 'sutono167',
        role : 'Developer',
        createdAt : new Date,
        updatedAt : new Date
      },
      {
        email : 'salsabilars98@gmail.com',
        gender : 'Female',
        password : 'salsss459',
        role : 'Designer',
        createdAt : new Date,
        updatedAt : new Date
      },
      {
        email : 'mochadwi23@sby.ac.id',
        gender : 'Male',
        password : 'dwiputra09',
        role : 'Engineer',
        createdAt : new Date,
        updatedAt : new Date
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
