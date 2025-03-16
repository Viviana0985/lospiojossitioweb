const imagenes = [
    "../envivo/imagenes/envivo001.jpg",
    "../envivo/imagenes/envivo002.jpg",
    "../envivo/imagenes/envivo003.jpg",
    "../envivo/imagenes/envivo004.jpg",
    "../envivo/imagenes/envivo005.jpg",
    "../envivo/imagenes/envivo006.jpg",
    "../envivo/imagenes/envivo007.jpg",
    "../envivo/imagenes/envivo008.jpg",
    "../envivo/imagenes/envivo009.jpg",
    "../envivo/imagenes/envivo010.jpg",
    "../envivo/imagenes/envivo011.jpg",
    "../envivo/imagenes/envivo012.jpg",
    "../envivo/imagenes/envivo013.jpg",
    "../envivo/imagenes/envivo014.jpg",
    "../envivo/imagenes/envivo015.jpg",
    "../envivo/imagenes/envivo016.jpg",
    "../envivo/imagenes/envivo017.jpg",
    "../envivo/imagenes/envivo018.jpg",
    "../envivo/imagenes/envivo019.jpg",
    "../envivo/imagenes/envivo020.jpg",
    "../envivo/imagenes/envivo021.jpg",
    "../envivo/imagenes/envivo022.jpg",
    "../envivo/imagenes/envivo023.jpg",
    "../envivo/imagenes/envivo024.jpg",
    "../envivo/imagenes/envivo025.jpg",
    "../envivo/imagenes/envivo026.jpg",
    "../envivo/imagenes/envivo027.jpg",
    "../envivo/imagenes/envivo028.jpg",
    "../envivo/imagenes/envivo029.jpg",
    "../envivo/imagenes/envivo030.jpg",
    "../envivo/imagenes/envivo031.jpg",
    "../envivo/imagenes/envivo032.jpg",
    "../envivo/imagenes/envivo033.jpg",
    "../envivo/imagenes/envivo034.jpg",
    "../envivo/imagenes/envivo035.jpg",
    "../envivo/imagenes/envivo036.jpg",
    "../envivo/imagenes/envivo037.jpg",
    "../envivo/imagenes/envivo038.jpg",
    "../envivo/imagenes/envivo039.jpg",
    "../envivo/imagenes/envivo040.jpg"
];

for (let i = 1; i <= 40; i++) {
    let num = i < 10 ? "00" + i : "0" + i; // Si es menor a 10, agrega "00", si no, "0"
    imagenes.push("../envivo/imagenes/envivo" + num + ".jpg");
}

const contenedorGaleria = document.getElementById("contenedorGaleria");

for (let index = 0; index < imagenes.length; index++) {
    const div = document.createElement("div");
    div.className = "col-md-4 col-6";
    div.innerHTML = `
        <img src="${imagenes[index]}" class="img-fluid rounded shadow-sm" alt="Concierto ${index + 1}"
            data-bs-toggle="modal" data-bs-target="#modalImagen"
            onclick="abrirModal(${index})">
    `;
    contenedorGaleria.appendChild(div);
}

let indiceActual = 0;

function abrirModal(indice) {
    indiceActual = indice;
    document.getElementById('imagenAmpliada').src = imagenes[indiceActual];
}

function cambiarImagen(direccion) {
    indiceActual += direccion;
    if (indiceActual < 0) indiceActual = imagenes.length - 1;
    if (indiceActual >= imagenes.length) indiceActual = 0;
    document.getElementById('imagenAmpliada').src = imagenes[indiceActual];
}