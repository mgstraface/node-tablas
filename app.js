const crearArchivoTabla = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

crearArchivoTabla(argv.b, argv.l, argv.h)
	.then((nombreArchivo) => console.log(nombreArchivo.america, "creado con éxito."))
	.catch((err) => {
		throw Error(err);
	});
