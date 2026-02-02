// Declarar la variable nota 
let nota = 75;

// Verificar que la nota tenga un valor válido
if (nota > 0) {
    console.log("La nota del estudiante es:", nota);

    if (nota >= 90) {
        console.log("Resultado: Excelente");
    } else if (nota >= 75 && nota <= 89) {
        console.log("Resultado: Bien");
    } else if (nota >= 60 && nota <= 74) {
        console.log("Resultado: Suficiente");
    } else {
        console.log("Resultado: No aprueba");
    }

} else {
    console.log("La nota no es válida");
}
