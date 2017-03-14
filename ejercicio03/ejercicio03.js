function Queue(){
  this.items = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;

  this.print = print;


  function enqueue(element){
    this.items.push(element);
  };
  function dequeue(){
    this.items.shift();
  };
  function print(){
    return console.log(this.items.toString());
  };

}

var usuarios = new Queue();
var numeroUsuarios = parseInt(prompt("Indique la cantidad de usuarios que va a ingresar:"));

for(var i=0; i<numeroUsuarios; i++){
  usuarios.enqueue(prompt("Introduzca el nombre " + (i+1)));
};
usuarios.print();
console.log("Primero en ser atendido: " + usuarios[0]);
console.log("Ultimo en ser atendido: " + usuarios[usuarios.length-1]);
