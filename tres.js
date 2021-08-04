/*
Llegan 10 vuelos con vacunas de distintos lugares del mundo
Se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “USA”)
-Cantidad de vacunas (no puede ser 0)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió mayor cantidad de vacunas
b- El promedio de vacunas llegadas de Asia
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 4 millones de vacunas se hace un descuento de 30%, Si se recibieron entre 2
y 4 millones el descuento es del 20% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento
*/

function mostrar() {
	let origen,
		cantidad,
		costo,
		acumVacAsia = 0,
		acumVacEuropa = 0,
		acumVacUsa = 0,
		origenMasVac,
		contVacAsia = 0,
		promedioVacAsia,
		acumCosto = 0,
		acumVacunas = 0,
		descuento,
		importeFinal,
		flagD = 1;

	for (let cont = 0; cont < 10; cont++) {

		origen = prompt("Ingrese origen (Asia/Europa/USA)").toLowerCase();
		while (origen != "asia" && origen != "europa" && origen != "usa") {
			origen = prompt("Origen invalido. Ingresela nuevamente (Asia/Europa/USA)").toLowerCase();
		}

		cantidad = parseInt(prompt("Ingrese la cantidad (Mayor a 0)"));
		while (cantidad <= 0) {
			cantidad = parseInt(prompt("Cantidad invalida. Ingresela nuevamente (Mayor a 0)"));
		}

		costo = parseInt(prompt("Ingrese el costo del vuelo (entre 1 millon y 5 millones de pesos"));
		while (costo < 1000000 || costo > 5000000) {
			costo = parseInt(prompt("Costo invalido. Ingrese el costo del vuelo (entre 1 millon y 5 millones de pesos"));
		}
		// a- El origen que envió mayor cantidad de vacunas 1
		if (origen == "asia") {
			acumVacAsia += cantidad;
			contVacAsia++;
		} else if (origen == "europa") {
			acumVacEuropa += cantidad;
		} else {
			acumVacUsa += cantidad;
		}

		// c- El total sin descuentos a pagar por los gastos de los viajes
		acumCosto += costo;
		acumVacunas += cantidad;

	}
	// A 2
	if (acumVacAsia > acumVacEuropa && acumVacAsia > acumVacUsa) {
		origenMasVac = "Asia";
	} else if (acumVacEuropa >= acumVacAsia && acumVacEuropa > acumVacUsa) {
		origenMasVac = "Europa";
	} else {
		origenMasVac = "USA";
	}

	// b- El promedio de vacunas llegadas de Asia
	promedioVacAsia = acumVacAsia / contVacAsia;

	//d- Si en total se recibieron mas de 4 millones de vacunas se hace un descuento de 30%, Si se recibieron entre 2
	// y 4 millones el descuento es del 20% con menor cantidad no hay descuento.

	if (acumVacunas > 4000000) {
		descuento = 30 * acumCosto / 100;
		flagD = 0;
	} else if (acumVacunas >= 2000000 && acumVacunas <= 4000000) {
		descuento = 20 * acumCosto / 100;
		flagD = 0;
	}

	importeFinal = acumCosto - descuento;

	document.write(`El origen que envió mayor cantidad de vacunas: ${origenMasVac} <br>`);
	document.write(`El promedio de vacunas llegadas de Asia: ${promedioVacAsia} <br>`);
	document.write(`El total sin descuentos a pagar por los gastos de los viajes: ${acumCosto} <br>`);
	//Informar si hubo descuento de cuanto fue y el importe final con descuento
	if (flagD) {
		document.write(`No hubo descuento <br>`);
	} else {
		document.write(`Hubo descuento, el cual fue de $${descuento}. El importe final es $${importeFinal}`);
	}
}
