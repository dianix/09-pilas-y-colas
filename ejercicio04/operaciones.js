// *** EJERCICIO ESPECIAL - PILAS Y COLAS - 14 de marzo, 2017 ***

// función constructora Clase filas
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

// funciones para operaciones
var suma = function(num1, num2){
  return parseInt(num1) + parseInt(num2);
};
var resta = function(num1, num2){
  return parseInt(num1) - parseInt(num2);
};
var multiplicacion = function(num1, num2){
  return parseInt(num1) * parseInt(num2);
};
var division = function(num1, num2){
  return parseInt(num1) / parseInt(num2);
};

// Para pedir los números al usuario
var num1 = prompt("Para realizar las operaciones de suma, resta, multiplicación y división:\nIngrese el número 1");
var num2 = prompt("Ingrese el número 2");

var ordenOperaciones = new Queue();
