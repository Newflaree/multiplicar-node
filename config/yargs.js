const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alisa: 'l',
    default: 10
  }
}

const argv = require('yargs')
  .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
  .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
  .help()
  .argv;

module.exports = {
  argv
}
