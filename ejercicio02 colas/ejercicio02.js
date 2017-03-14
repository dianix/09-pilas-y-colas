var nombres = [];

function Queue(){
  var items = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
//  this.empty = empty;
  this.print = print;
  this.size = size;

  function enqueue(element){
    items.push(element);
  };
  function dequeue(){
    return items.shift();
  };
/*  function empty(){
    return items.length == 0;
  }; */
  function print(){
    return console.log(items.toString());
  };
  function size(){
    return items.length;
  };
}

var nombre = new Queue();
nombre.enqueue("Diana");
nombre.enqueue("Maria");
nombre.enqueue("Karla");
nombre.enqueue("Luisa");
nombre.enqueue("Lola");
nombre.print();

var apellido = new Queue();
apellido.enqueue("Pérez");
apellido.enqueue("Martínez");
apellido.enqueue("López");
apellido.enqueue("García");
apellido.enqueue("Guzmán");
apellido.print();

while(nombre.size() > 0){
  nombres.push(nombre.dequeue() + " " + apellido.dequeue());
  //console.log(nombre.size());
};
console.log(nombres);
