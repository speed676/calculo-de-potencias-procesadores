let fs = require('fs');

let params = process.argv;
console.log("Parametros ----> "+params);

// TODO comprobar

// let archivo = fs.readFileSync(params[2], 'utf-8');
// console.log(archivo);

fs.readFile(params[2], 'utf-8', (err, data) => {
	if(err) {
	  	console.log('error: ', err);
	} else {
		let result = data.toString().split('\n')
		let par = 0;
		for (var i in result) {
			if(par)
				console.log(result[i]);
			else
				console.log("Guardo valor: "+result[i])
				datos[i] = result[i];
		}
		console.log("@@@@@@@@@@@@@@@@@@@@@@@@");
		printFinal();
	}
});

function printFinal() {
	for(let i in datos)
		console.log(datos[i])	
}

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
