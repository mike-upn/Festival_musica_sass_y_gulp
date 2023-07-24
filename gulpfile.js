const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
// funcion ejemplo
function tarea(done) {
  console.log("EjecutandoTarea...");
  done();
}
exports.tarea = tarea;

// tareas del proyecto
function css(done) {
  src("src/scss/**/*.scss") // identificar el archivo de sass
    .pipe(plumber()) // evitar que se detenga el proceso
    .pipe(sass()) //Compilarla
    .pipe(dest("build/css")); // almacenarla en el disco
  done();
}
function dev(done) {
  watch("src/scss/**/*.scss", css);
  done();
}

exports.css = css;
exports.dev = dev;
