# Festival_musica_sass_y_gulp

# iniciar el proyecto

npm init
//preguntas que te hara al iniciar
pacage name:(nombre_paquete) enter
version :(version) enter
description: Proyecto con gulp, sass y html
entry point :(index.js) enter
test command: enter
git repository: url
keywords: SASS, Gulp,
author: omar lujan
license:(ISC)
IS this OK?(yes)
--package.json creado correctamente

# instalar SASS

npm install sass --save--dev //dependencia de desarrollo
//se agregara la dependencia en package.json
//se crea package-lock.json
// se ha creado una carpeta node_modules(se puede borrar al final del proyecto)
si lo necesitas solo escribes:
npm insatall
//lo que hara es abrir packages.json buscar las dependencias y recuperar

# usar sass

recomedo que dentro de la carpeta:
src
tengas una carpeta:
scss
ahi crear un archivo con la extencion.scss
ejemplo: app.scss

# compilar sass (si compilar sas se compila)

en el archivo:
package.json
buscar
"scripts":{

}
// vamos a agregar la referencia a sass para que lo compile
dentro de scripts
"sass": "sass src/scss/:build/css
quedara asi:
"scripts":{
"sass": "sass --watch src/scss/:build/css
//1.----- 2.------3.----- 4-------5
}
//1. nombre
//2. sass referencia a un archivo que esta en node_modules bin
//3. la ubicacion de los scss(no es nescesario el nombre del archivo dntro de
la carpeta scss)
//4. agregamos el argumento --watch para que simpre pare escuchando
los cambios en el sas y lo compile a css
//5. en donde quiere que guarde el compilado, en este caso lo guardamos en
la carpeta build/css

# comando para comilar

npm run sass

# usar el sass compilado en el html

como al compilar el scss le decimos que
guarde el compilado en :
build/css
en el html tenemos que referenciar a esa carpeta
