const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe:'Is the base for multiplication'
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Show the table in console'
  })
  .option('t', {
    alias:'to',
    type:'number',
    default: 10,
    describe: 'Es el alcance de la multiplicación'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un numero';
    }
    return true;
  }).argv;

module.exports = argv;