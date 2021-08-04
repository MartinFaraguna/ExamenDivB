/*
Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada
*/
function mostrar() {
	let nombre,
		edad,
		vacuna,
		dosis,
		sexo,
		acumEdadRusa = 0,
		contRusa = 0,
		promedioEdadRusa,
		mayorEdad,
		mayorEdadNombre,
		mayorEdadVacuna,
		flag = 1,
		contAmericana = 0,
		contMayoresAmericana = 0,
		porcentajeMayoresAmericana,
		contVacunados = 0,
		contDosDosis = 0,
		porcentajeDosDosis,
		contChina = 0,
		menosInoculada,
		seguir;

	do {

		nombre = prompt("Ingrese nombre (entre 3 y 10 caracteres)").toLowerCase();
		while (nombre.length < 3 || nombre.length > 10) {
			nombre = prompt("Nombre invalido. Ingrese nuevamente (entre 3 y 10 caracteres)").toLowerCase();
		}

		edad = parseInt(prompt("Ingrese la edad (mayor o igual a 12)"));
		while (edad < 12 || isNaN(edad)) {
			edad = parseInt(prompt("Edad invalida. Ingresela nuevamente (mayor o igual a 12)"));
		}

		if (edad >= 12 && edad <= 17) {
			vacuna = "americana";
		} else {
			vacuna = prompt("Ingrese la vacuna aplicada (rusa/china/americana)").toLowerCase();
			while (vacuna != "rusa" && vacuna != "china" && vacuna != "americana") {
				vacuna = prompt("Vacuna invalida. Ingrese nuevamente (rusa/china/americana)").toLowerCase();
			}
		}

		dosis = prompt("Ingrese si es la primera o segunda dosis (p/s)").toLowerCase();
		while (dosis != "p" && dosis != "s") {
			dosis = prompt("Ingreso invalido. Ingrese si es la primera o segunda dosis (p/s)").toLowerCase();
		}

		sexo = prompt("Ingrese su genero (f/m)").toLowerCase();
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Genero invalido. Ingreselo nuevamente (f/m)").toLowerCase();
		}

		// a- Promedio de edad de los que se vacunaron con la rusa
		if (vacuna == "rusa") {
			acumEdadRusa += edad;
			contRusa++;
		} else if (vacuna == "americana") {
			// c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
			contAmericana++;
			if (edad > 17) {
				contMayoresAmericana++;
			}
		} else {
			//china
			contChina++
		}

		// b- Nombre y vacuna de la mujer con más edad
		if (sexo == "f") {
			if (flag || edad > mayorEdad) {
				mayorEdadNombre = nombre;
				mayorEdadVacuna = vacuna;
				mayorEdad = edad;
				flag = 0;
			}
		}


		// d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
		if (dosis == "s") {
			contDosDosis++;
		}

		contVacunados++;

		seguir = prompt("Desea ingresar otro? (s/n)").toLowerCase();
	} while (seguir == "s");

	promedioEdadRusa = acumEdadRusa / contRusa; //A
	porcentajeMayoresAmericana = contMayoresAmericana * 100 / contAmericana; //C
	porcentajeDosDosis = contDosDosis * 100 / contVacunados; //D

	// e- Vacuna menos inoculada

	if (contAmericana < contChina && contAmericana < contRusa) {
		menosInoculada = "Americana";
	} else if (contRusa <= contAmericana && contRusa < contChina) {
		menosInoculada = "Rusa";
	} else {
		menosInoculada = "China";
	}

	document.write(`Promedio de edad de los que se vacunaron con la rusa: ${promedioEdadRusa} <br>`); //A
	document.write(`Nombre y vacuna de la mujer con más edad: Nombre = ${mayorEdadNombre} / Vacuna = ${mayorEdadVacuna} <br>`); //B
	document.write(`De las personas que recibieron la vacuna americana que porcentaje son mayores de edad: ${porcentajeMayoresAmericana}<br>`);
	document.write(`Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados: ${porcentajeDosDosis}<br>`);
	document.write(`Vacuna menos inoculada: ${menosInoculada}`);
}
