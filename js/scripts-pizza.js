// Backend Buisness logic

function Parlor (size, toppings, quantity, delivery) {
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
  this.delivery = delivery;
}

Parlor.prototype.pizzaPrice = function() {
  var calculatePrice = 0;
  // Calculates cost based on size
  if (this.size === "12") {
    this.calculatePrice = 12;
  } else if (this.size === "14") {
    this.calculatePrice = 14;
  } else if (this.size === "16") {
    this.calculatePrice = 16;
  } else if (this.size === "20") {
    this.calculatePrice = 20;
  }
  // Calculates cost based on # of toppings
  if (this.toppings === 1) {
    this.calculatePrice += 1;
  } else if (this.toppings === 2) {
    this.calculatePrice += 2;
  } else if (this.toppings === 3) {
    this.calculatePrice += 3;
  } else if (this.toppings === 4) {
    this.calculatePrice += 4;
  } else if (this.toppings === 5) {
    this.calculatePrice += 5;
  } else if (this.toppings === 6) {
    this.calculatePrice += 6;
  } else if (this.toppings === 7) {
    this.calculatePrice += 7;
  }
  // Calculates cost based on quantity discount
  if (this.quantity === "1") {
    this.calculatePrice += 10;
  } else if (this.quantity === "2") {
    this.calculatePrice += 5;
  } else if (this.quantity === "3") {
    this.calculatePrice += 1;
  }
  // Calculates cost based on if it was delivered or not
  if (this.delivery === "dine in") {
    this.calculatePrice += 0;
  } else this.calculatePrice += 5;
  console.log(calculatePrice)
  return this.calculatePrice;
}

//frontend UI logic

$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var
    var
    var
    var
    var

    $(".cost").show();
    $("").text();
    $("").text();
    $("").text();
    $("").text();
  })
})
