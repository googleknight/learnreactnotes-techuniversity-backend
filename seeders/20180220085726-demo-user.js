

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('notes', [{
    noteId: 123,
    title: 'Doe',
    body: 'demosdassasasas',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
