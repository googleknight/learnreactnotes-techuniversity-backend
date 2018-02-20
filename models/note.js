

module.exports = (sequelize, DataTypes) => {
  const note = sequelize.define('note', {
    noteId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return note;
};
