const Models = require('../../models');

module.exports = [{
  method: 'GET',
  path: '/notes',
  handler: (request, response) => {
    Models.note.findAll()
      .then((notes) => {
        response({
          data: notes,
          statusCode: 200,
        });
      })
      .catch(() => {
        response({
          message: 'Could not view data',
          statusCode: 400,
        });
      });
  },
},
{
  method: 'PUT',
  path: '/notes',
  handler: (request, response) => {
    Models.note.destroy({
      truncate: true,
    }).then(() => {
      const notes = JSON.parse(request.payload);
      console.log(notes);
      Models.note.bulkCreate(notes)
        .then(() => {
          response({
            data: 'data inserted',
            statusCode: 201,
          });
        });
    }).catch((error) => {
      response({
        message: 'Could not update data',
        statusCode: 400,
      });
    });
  },
},
];
