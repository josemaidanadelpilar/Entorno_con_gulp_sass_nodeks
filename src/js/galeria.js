document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
})
function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')
    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;
        //Anañadir la funcion de mostrar imagen
        imagen.onclick = mostrarImagen;
        const lista = document.createElement('LI')
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}
function mostrarImagen(event) {
    const id = parseInt(event.target.dataset.imagenId);
    //Va a generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    //mostrar en el HTML 
    const body = document.querySelector('body');
    body.appendChild(overlay);
}
function mostrarImagen(event) {
    const id = parseInt(event.target.dataset.imagenId);
    //Va a generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.jpg`;
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }
    //Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'x';

    cerrarImagen.classList.add('btn-cerrar');
    //Cuando se preciona, se cierra la imagen 
    cerrarImagen.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');

    }
    overlay.appendChild(cerrarImagen);
    //mostrar en el HTML 
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}
