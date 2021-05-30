//Detección de sentimientos en texto de parte de los usuarios

// 1.que el programa Meni haga preguntas
//var Preguntas;
//sinValor = "Hola buenas tardes";
//console.log( sinValor );

const axios = require( 'axios' );
const prompt = require('prompt-sync')();
//var pregunta = prompt("--> ");
//var pregunta = "en japones";

//Preguntas para usuarios
var nombre = prompt( "Hola, ¿Cuál es tu nombre?");
console.log( 'Bienvenida'+nombre )

var mood = prompt( "¿Como te encuentras el día de hoy?");

//console.log( "Puedes escribir o tomar una foto que refleje tu estado de ánimo" );
//console.log( "Dime que has hecho el día de hoy" );
//console.log( "Sabes lo que es la salud mental" );


const accionesRespuesta = [
    "Bailemos un poco",
    "Puedes marcar el número de algún amigo o familiar aquí",
    "Puedes sentirte mejor haciendo algo amable por alguien", 
    "Saltemos un poco",
    "Resuelve este rompecabezas"
]

//Ingresar los datos del usuario
const datosAlumnos = [ 
    { nombre : "Camila", id: "1", respuesta: "Hoy he llorado mucho y no tengo motivación" },
    { nombre: "Ana", id: "2", respuesta: "Me he sentido muy feliz, porque tengo una nueva mascota"},
    { nombre: "Luis", id: "3", respuesta: "Me encuentro agotado y estresado"}
];

//Analizar los datos con la petición de analisis de texto

var body = { 
    "documents":[
        {
            "language": "es",
            "id": "1",
            "text": mood
        },
        {
            "language": "es",
            "id": "2",
            "text": datosAlumnos[1].respuesta
        },
        {"language": "es",
        "id": "3",
        "text": datosAlumnos[2].respuesta
    }
    ]
}
 function obtenerOpiniones( callback ){
var direccion = 'https://servicioanalisistexto.cognitiveservices.azure.com/text/analytics/v3.0/sentiment'

axios.post( direccion, body, {
    headers :{
        "Content-Type" : "application/json",
        "Ocp-Apim-Subscription-Key" : "8b4c7829af844bc699425c01e131246a"
    }
})
.then( respuesta => {
    callback( respuesta.data.documents );
   //console.log( respuesta.data.documents );
})
.catch( error => { console.log( error.response ) } );
 }
//Detección de emociones del texto
function obtenerResultado( arregloSentimientos )
{
    var vPositivo = 0; 
    var vNegativo = 0;
    var vNeutro = 0;
    for( var i = 0; i < arregloSentimientos.length; i++ ){
        if( arregloSentimientos[i].sentiment == "negative"){
            vNegativo++;
        }
        else if( arregloSentimiento[i].sentiment == "positive"){
            vPositivo++;
        }
        else if( arregloSentimiento[i].sentiment == "neutral"){
            vNeutro++;
        } 

    }
    
    //Según los resultados dar alguna respuesta
    if ( (vNegativo > vPositivo) && (vNegativo > vNeutro) ){
        console.log( accionesRespuesta[3] );
    }

    //si detecta negativismo va a sujerir actividad fisica ya que aumenta los niveles de felicidad
    
    else if ((vPositivo > vNegativo ) && (vPositivo > vNeutro)){
        console.log( "Ya que tu actitud es positiva" + accionesRespuesta[5] ); }
    }
     //si detecta positivismo va a solicitar la canción favorita

//accionesRespuesta[2]

obtenerOpiniones( obtenerResultado );

//Despedirse
