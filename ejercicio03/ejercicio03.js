function Queue(){
  var items = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.print = print;

  function enqueue(element){
    items.push(element);
  };
  function dequeue(){
    return items.shift();
  };
  function front(){
    return items[0];
  };
  function back(){
    return items[items.length-1];
  };
  function print(){
    return document.write(items.toString());
  };
}

var usuarios = new Queue();
var numeroUsuarios = parseInt(prompt("Indique la cantidad de usuarios que va a ingresar:"));

for(var i=0; i<numeroUsuarios; i++){
  usuarios.enqueue((prompt("Introduzca el nombre " + (i+1))).toUpperCase());
};
document.write("<h3>Lista de usuarios por orden de llegada:</h3>");
usuarios.print();
document.write("<h4>Primero en ser atendido: " + usuarios.front()+"</h4>");
document.write("<h4>Ultimo en ser atendido: " + usuarios.back()+"</h4>");
