const knex = require('../mysql');
// it gives us the knex connection

knex.raw('show schemas')
   .then(res => console.log(res))