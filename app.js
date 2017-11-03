let fs = require('fs');

let parametros = process.argv;
let datos = {};

function main(params) {

	fs.readFile(params[2], 'utf-8', (err, data) => {
		if(err) {
			  console.log('error: ', err);
		} else {
			let result = data.toString().split('\n')
			
			for (var i in result) {
				let linea = result[i].trim().split(" ");
	
				if(linea[0] != "#")	{
					valores = linea[0].split("=");
					let k = valores[0];
					let v = valores[1];
					let vector = v.trim().split(";");
					if(vector.length > 1) 
						datos[k] = vector;
					else
						datos[k] = v;
				}
			}
		}
		console.log("\nDatos a analizar:\n");
		console.log(datos);
		
	});		
}



// --------------- Main ------------------

// Comprobación errores lectura fichero
if (parametros.length <= 0 || parametros.length >= 4) {
		try {
			if(fs.accessSync(parametros[2])) {
				// existe
			}
		} catch (e) {
			console.error("    El fichero no se puede leer")
		}
		console.error("    Parámetros de entrada incorrectos debe ser: \n"+
					"        node app.js <nombre_fichero_texto>");
} else {

	// Programa principal:
	main(parametros);

}
/*----------------------------------------------
	P = N * Pesta + A Pdinamica
	Pdinamica = C * V * f
*/

// let P = ();
