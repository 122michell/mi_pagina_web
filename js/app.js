const numeroFavorito = 12;

function adivinarNumero() {
    let intento = parseInt(document.getElementById("intento").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(intento)) {
        resultado.innerText = "Por favor, escribe un número.";
        return;
    }

    if (intento === numeroFavorito) {
        resultado.innerText = "🎉 ¡Ganaste! Adivinaste mi número favorito.";
    } else if (intento === numeroFavorito - 1 || intento === numeroFavorito + 1) {
        resultado.innerText = "🔥 ¡Te falta un poquito para llegar!";
    } else if (intento > numeroFavorito) {
        resultado.innerText = "📉 Te pasaste, estás muy lejos (es más abajo).";
    } else {
        resultado.innerText = "📈 Estás muy lejos (es más arriba).";
    }
}

function cambiarImagen() {
    const imagen = document.getElementById("imagenPasion");
    const seleccion= document.getElementById("selectorPasiones").value;

    if (seleccion === "NOVELA") {
        imagen.src = src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiytB_jqsjz7xVWTjLyyM_zze0yBQ5lCxrmyI0KtIs4tYxb2eCCxF3HPc&s=10";
        textoPasiones.innerText = "Mi novela favorita se llama Marimar";
    } else if (seleccion === "COCINAR") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9tge_T4wSREJJYnuCdWf5sapx2-yXY5XnRf8BUAImw&s=10";
        textoPasiones.innerText = "Me encanta hacer frijoles rancheros";
    } else if (seleccion === "MÚSICA") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6VxUZsRIOUeNyNvJGmYTa8Otsern6Rlg0YlxG3Vchq-Pnq2gwmgxttKo&s=10";
        textoPasiones.innerText = "Mi cancion favorita se llama Alma(zaider)";
    }
}

function mostrarAlerta() {
    alert("¡Profe, Muchas gracias por explicarnos tan bien y con tanta paciencia!");
}