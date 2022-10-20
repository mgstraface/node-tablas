const fs = require("fs");
const colors = require("colors");

const crearArchivoTabla = async (base, listar, hasta) => {
	try {
		let salida = "";
		let consola = "";
		let numArchivo = 0;
		let limit = hasta ? hasta : 10;

		for (let i = 1; i <= limit; i++) {
			salida += `${base} x ${i} = ${base * i}\n`;
			consola += `${base} ${"x".red}  ${i} ${"=".red} ${base * i}\n`;
			numArchivo = base;
		}

		if (listar) {
			console.log("======================".america);
			console.log(colors.white("TABLAS DE MULTIPLICAR"));
			console.log("======================".america);
			console.log(consola);
		}

		fs.writeFileSync(`./salida/tabla-${numArchivo}.txt`, salida);

		return `tabla-${numArchivo}.txt`;
	} catch (error) {
		throw error;
	}
};

module.exports = crearArchivoTabla;
