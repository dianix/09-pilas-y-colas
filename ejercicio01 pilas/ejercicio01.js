var nombres = [];

function Stack() {
  var items = [];
  this.push = function(element){
    items.push(element);
  };
  this.pop = function(){
    return items.pop();
  };
  this.peek = function() {
    return items[items.length - 1];
  };
  this.isEmpty = function(){
    return items.length == 0;
  };
  this.size = function(){
    return items.length;
  };
  this.clear = function(){
    items = [];
  };
  this.print = function(){
    console.log(items.toString());
  };
}
var nombre = new Stack();
nombre.push("Diana");
nombre.push("Maria");
nombre.push("Karla");
nombre.push("Luisa");
nombre.push("Lola");
nombre.print();

var apellido = new Stack();
apellido.push("Pérez");
apellido.push("Martínez");
apellido.push("López");
apellido.push("García");
apellido.push("Guzmán");
apellido.print();

while(nombre.size() > 0) {
  nombres.push(nombre.pop() +" "+ apellido.pop());
}

console.log(nombres);
