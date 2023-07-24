const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// funcion ejemplo
function tarea(done) {
  console.log("EjecutandoTarea...");
  done();
}
exports.tarea = tarea;

// tareas del proyecto
function css(done) {
  src("src/scss/app.scss") // identificar el archivo de sass
    .pipe(sass()) //Compilarla
    .pipe(dest("build/css")); // almacenarla en el disco
  done();
}
function dev(done) {
  watch("src/scss/app.scss", css);
  done();
}

exports.css = css;
exports.dev = dev;
