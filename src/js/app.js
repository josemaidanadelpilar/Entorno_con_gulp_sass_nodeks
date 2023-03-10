document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
    navegacionFija();
});
function navegacionFija() {
    const barra = document.querySelector('.header')
    //Registrar el intersection Observer
    const observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }else{
            barra.classList.add('fijo');
        }
    })
    //Elemento observar 
    observer.observe(document.querySelector('.sobre-festival'));
}
function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach( function ( enlace ){
        enlace.addEventListener('click', function ( event ){
            event.preventDefault();

            const seccion = document.querySelector(event.target.attributes.href.value)
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
