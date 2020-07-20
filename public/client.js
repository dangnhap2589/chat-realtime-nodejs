var socket = io.connect('https://chatsocketio0002.herokuapp.com:8000');
socket.on('connect', function (data) {
    socket.emit('join', 'Hello server from client');
});

//listen thread event
socket.on('thread', function (data) {
    $('#thread').append('<li>' + data + '</li>')
});

$('form').submit(function(){
    var message = $('#message').val();
    socket.emit('messages',message);
    this.reset();

    return false;
});
