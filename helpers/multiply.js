const fs = require('fs');
const colors = require('colors');

const createFileTable = async (base ,list, to) => {
  try {
    let exit, exitConsole = '';

    for (let i = 1; i <= to; i++) {
      exit += `${base} x ${i} = ${base * i}\n`;
      exitConsole += `${colors.green(base)} x ${colors.cyan(i)} = ${colors.blue(base * i)} \n`;
    }
    if(list === true) {
      console.log(exitConsole)
    }

    fs.writeFileSync(`tabla-${base}.txt`, exit);

    return `tabla-${base}.txt`;
  } catch (err) {
    return err
  }
};
module.exports = {
  createFileTable,
};
