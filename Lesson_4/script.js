function main() {
    var socket = io.connect('http://localhost:3000');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var del = document.getElementById('delete');
    var field= document.getElementById('chfield');
 
    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;
 
    function delete2(){
          socket.emit("delete message", );
           }
    del.onclick= delete2;
    
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
       field.appendChild(p);
        input.value = "";
}
    function delete3(){
        while (field.firstChild) {
            field.removeChild(field.firstChild);
        }
    }
socket.on('delete message', delete3);
socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;
