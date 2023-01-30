function appendMessage(msg) {
    $("#messages").append("<li>" + msg + "</li>");
}

$(function() {
    let socket = io("http://localhost:1937");

    socket.on("confirm connection", function(msg) {
        appendMessage(msg);
    });

    socket.on("response", function(msg) {
        appendMessage(msg);
    });

    socket.emit("request", "Hello from the client");

});
