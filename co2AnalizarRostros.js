const axios = require('axios');
const prompt = require('prompt-sync')();

var nombre = prompt( "Hola, ¿Cuál es tu nombre?");
console.log( 'Bienvenida' + nombre )

var foto = prompt( "¿Como te encuentras el día de hoy?, Inserta una foto contestando la pregunta");

//Datos
var datos = { url : foto };

//Direción de la petición (end point, punto de acceso)
var direccion = 'https://servicioface.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceAttributes=age,gender,smile,emotion'


//Petición POST
axios.post( direccion, datos, { 
    headers : 
    { 'Ocp-Apim-Subscription-Key': '9f8839e9bd4e446c8d1bfad49bd6db72',
     'Content-type': 'application/json'}
 } ) 
//.categories[1].detail

.then( respuesta => console.log( respuesta.data ))
.catch( error => { console.log( error.data )} );