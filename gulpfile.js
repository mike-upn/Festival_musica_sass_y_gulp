// // funcion ejemplo
// function tarea(done) {
//   console.log("EjecutandoTarea...");
//   done();
// }
// exports.tarea = tarea;
const { src, dest, watch, parallel } = require("gulp");
///CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
///IMAGENES
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");
const avif = require("gulp-avif");

//javascript
const terser = require("gulp-terser-js");

// TAREAS CSS
function css(done) {
  src("src/scss/**/*.scss") // identificar el archivo de sass
    .pipe(sourcemaps.init()) // inicializar el mapa de sass
    .pipe(plumber()) // evitar que se detenga el proceso
    .pipe(sass()) //Compilarla
    .pipe(postcss([autoprefixer(), cssnano()])) // agregarle prefijos y comprimirlo (minificarlo
    .pipe(sourcemaps.write(".")) // escribir el mapa de sass
    .pipe(dest("build/css")); // almacenarla en el disco
  done();
}

// TAREAS IMAGENES
function versionwebp(done) {
  const opciones = {
    quality: 50,
  };
  src("src/img/**/*.{jpg,png}") //ubicacion de las imagenes
    .pipe(webp(opciones)) //convertir a webp
    .pipe(dest("build/img")); //guardar en la carpeta de destino
  done();
}
function imagenes(done) {
  const opciones = {
    optimizationLevel: 3,
  };
  src("src/img/**/*.{jpg,png}") // ubicacion de las imagenes
    .pipe(cache(imagemin(opciones))) //optimizar las imagenes
    .pipe(dest("build/img")); //guardar en la carpeta de destino
  done();
}
function versionavif(done) {
  const opciones = {
    quality: 50,
  };
  src("src/img/**/*.{jpg,png}") //ubicacion de las imagenes
    .pipe(avif(opciones)) //convertir a avif
    .pipe(dest("build/img")); //guardar en la carpeta de destino
  done();
}
// javascript
function javascript(done) {
  src("src/js/**/*.js")
    .pipe(sourcemaps.init()) //inicia el mapeo
    .pipe(terser()) //minifica js
    .pipe(sourcemaps.write(".")) //escribe el mapeo
    .pipe(dest("build/js"));
  done();
}

// TAREAS WATCH
function dev(done) {
  watch("src/scss/**/*.scss", css);
  watch("src/js/**/*.js", javascript);
  done();
}

// Llamado de las tareas
exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionwebp = versionwebp;
exports.versionavif = versionavif;
exports.dev = parallel(/*imagenes, versionwebp, versionavif,*/ javascript, dev);
