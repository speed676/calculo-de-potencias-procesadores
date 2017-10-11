let fs = require('fs');

let params = process.argv;
console.log("Parametros ----> "+params);

// TODO comprobar

let archivo = fs.readFileSync(params[2], 'utf-8');
console.log(archivo);

let datos = {
	cores:"",
	wbase:"",
	wcoreinactivo:"",
	coreC:"",
	frecuencias:[],
	coltajes:[],
	tsecuencial:"",
	gradoparalelizacion:"",
	divisiontrabajo:[]
};

/*----------------------------------------------
	P = N * Pesta + A Pdinamica
	Pdinamica = C * V * f
*/

// let P = ();
