const formulario = document.getElementById('form');

let ejercicio = ["sentadillas", "bancos", "peso-muerto", "prensa"];

function* entrenamientodiarios(weeks, days) {
    for (let semana = 1; semana <= weeks; semana++) {
        for (let dia = 1; dia <= days; dia++) {
            const ejercicioaleatorio = ejercicio[Math.floor(Math.random() * ejercicio.length)];
            yield {semana, dia, ejercicio: ejercicioaleatorio};
        }
    }
}

function iterarentrenamientos(weeks, days) {
    const entrenamientos = entrenamientodiarios(weeks, days);
    for (const entrenamiento of entrenamientos) {
        console.log(`${entrenamiento.dia}: ${entrenamiento.ejercicio}, semana: ${entrenamiento.semana}`)
    }
}
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const weeks = parseInt(document.getElementById('weeks').value, 10);
    const days = parseInt(document.getElementById('days').value, 10);
    iterarentrenamientos(weeks, days);
})

formulario.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const weeks = parseInt(document.getElementById('weeks').value, 10);
        const days = parseInt(document.getElementById('days').value, 10);
        iterarentrenamientos(weeks, days);
    };
})