const argv = require("yargs")
	.option("b", {
		alias: "base",
		type: "number",
		demandOption: true,
		describe: "Toma la base y crea un archivo de texto con su tabla de multiplicar",
	})
	.option("l", {
		alias: "listar",
		type: "boolean",
		default: false,
		describe: "Muestra en la consola la tabla que se imprimirá en el archivo .txt",
	})
	.option("h", {
		alias: "hasta",
		type: "number",
		default: false,
		describe: "Límite de iteraciones de tabla de multiplicar .txt",
	})

	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw "La base debe ser un número";
		} else if (isNaN(argv.h)) {
			throw "El límite debe ser un número";
		}
		return true;
	}).argv;

module.exports = argv;
