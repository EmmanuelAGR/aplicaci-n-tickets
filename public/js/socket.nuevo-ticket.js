// Comando para establecer la conexión
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {

    console.log('Conectado al servidor');

});

socket.on('disconnect', () => {

    console.log('Desconectado del servidor');

});

//Obtener ultimo ticket al iniciar la pagina

socket.on('estadoActual', (resp) => {

    label.text(resp.actual);
});

$('button').on('click', () => {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });

});