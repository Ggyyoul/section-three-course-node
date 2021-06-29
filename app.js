const { createFileTable } = require('./helpers/multiply');
const argv = require('./config/yargs')
const {base, list, to} = argv;
createFileTable(base, list, to)
  .then((ArchiveName) => console.log(ArchiveName))
  .catch((err) => console.log(err));
