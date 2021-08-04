/*
El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa más encontrada
d- Edad del mayor extranjero contagiado
e- Cantidad de personas argentinas contagiadas con la delta
*/

function mostrar() {
    let nacionalidad,
        resultado,
        edad,
        cepa,
        contHisopados = 0,
        contPositivos = 0,
        contNegativos = 0,
        porcentajePos,
        porcentajeNeg,
        contDelta = 0,
        contAlfa = 0,
        contBeta = 0,
        masEncontrada,
        mayorEdad,
        contArgDelta = 0,
        flagM = 1;

    for (let cont = 0; cont < 8; cont++) {
        nacionalidad = prompt("Ingrese nacionalidad (argentina/extranjero)").toLowerCase();
        while (nacionalidad != "argentina" && nacionalidad != "extranjero") {
            nacionalidad = prompt("Nacionalidad invalida. Ingresela nuevamente (argentina/extranjero)").toLowerCase();
        }

        resultado = prompt("Ingrese resultado (positivo/negativo)").toLowerCase();
        while (resultado != "positivo" && resultado != "negativo") {
            resultado = prompt("Resultado invalida. Ingreselo nuevamente (positivo/negativo)").toLowerCase();
        }

        edad = parseInt(prompt("Ingrese la edad (entre 18 y 65)"));
        while (edad < 18 || edad > 65 || isNaN(edad)) {
            edad = parseInt(prompt("Edad invalida. Ingresela nuevamente (entre 18 y 65)"));
        }

        if (resultado == "positivo") {
            contPositivos++;
            cepa = prompt("Ingrese cepa (delta/alfa/beta)").toLowerCase();
            while (cepa != "delta" && cepa != "alfa" && cepa != "beta") {
                cepa = prompt("Cepa invalida. Ingrese nuevamente (delta/alfa/beta)").toLowerCase();
            }
        } else {
            contNegativos++;
            cepa = "ninguna"
        }

        if (cepa == "delta") {
            contDelta++;
            // e- Cantidad de personas argentinas contagiadas con la delta
            if (nacionalidad == "argentina") {
                contArgDelta++;
            }
        } else if (cepa == "alfa") {
            contAlfa++;
        } else {
            contBeta++;
        }

        // d- Edad del mayor extranjero contagiado
        if (nacionalidad == "extranjero" && resultado == "positivo") {
            if (flagM || mayorEdad < edad) {
                mayorEdad = edad;
                flagM = 0;
            }
        }

        contHisopados++;
    }
    // a- Porcentaje de positivos
    porcentajePos = contPositivos * 100 / contHisopados;

    // b- Porcentaje de negativos
    porcentajeNeg = contNegativos * 100 / contHisopados;

    // c- Cuál es la cepa más encontrada
    if (contDelta > contAlfa && contDelta > contBeta) {
        masEncontrada = "Delta";
    } else if (contAlfa >= contDelta && contAlfa > contBeta) {
        masEncontrada = "Alfa";
    } else {
        masEncontrada = "Beta"
    }

    document.write(`Porcentaje de positivos: ${porcentajePos} <br>`); //A
    document.write(`Porcentaje de negativos: ${porcentajeNeg} <br>`); //B
    document.write(`Cuál es la cepa más encontrada: ${masEncontrada} <br>`); //C
    document.write(`Edad del mayor extranjero contagiado: ${mayorEdad} <br>`); //D
    document.write(`Cantidad de personas argentinas contagiadas con la delta: ${contArgDelta} <br>`); //E

}
