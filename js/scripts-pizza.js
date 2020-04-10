// Backend Buisness logic

function Parlor (size, toppings, quantity, forHereOrToGo) {
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
  this.forHereOrToGo = forHereOrToGo;
}

Parlor.prototype.pizzaPrice = function() {
  var calculatePrice = 0;
  if (this.size === "12") {
    this.calculatePrice = 12;
  } 
}

//frontend UI logic

$(document).ready(function() {

  $("form").submit(function(event) {
  event.preventDefault();

  })
})
