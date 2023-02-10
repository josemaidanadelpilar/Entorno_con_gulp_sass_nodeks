
const { series, src ,dest, watch} = require('gulp') // Usa series porque tiene multiples funciones 
const sass = require('gulp-sass')(require('sass'));//solo usa series porque es solo una funcion 
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');
//Utilidades CSS

const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//Utilidades JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename')
// //Funcion de complilar SASS 
const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

function css () {
    return src(paths.scss)
        .pipe( sourcemaps.init() )
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe( sourcemaps.write('.') )
        .pipe(dest('./build/css'))
}
function javascript() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe( terser())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({ suffix: '.min'}))
        .pipe(dest('./build/js'))

}
function imagenes (){
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe(notify({message: 'Imgen Minificada'}))
}
function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe(notify({message: 'Version webp listo'}))
}


function watchArchivo(){
    watch(paths.scss,css); 
    watch(paths.js, javascript)// * es igual a la carpeta actual 
}
exports.css = css;
exports.javascript = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.watchArchivo = watchArchivo;



exports.default = series(css,javascript,imagenes,versionWebp, watchArchivo);















//ESTE ES PARA COMPILAR GULP 
// function css(done) {
//     console.log('Compilando... SASS');
//     done();
// }
// function javascript(done){
//     console.log('Compilando JavaScripts');
//     done();
    
// }
// function minificarHtmla(done) {
//     console.log('Minificando...')
//     done();
   
    
// }
// exports.css = css;
// exports.minificarHtmla = minificarHtmla;
// exports.javascript = javascript;
// exports.default = parallel(css,javascript,minificarHtmla);