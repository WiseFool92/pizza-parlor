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
  if (this.size === "12in") {
    this.calculatePrice = 12;
  } else if (this.size === "14in") {
    this.calculatePrice = 14;
  } else if (this.size === "16in") {
    this.calculatePrice = 16;
  } else if (this.size === "20in") {
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
  return this.calculatePrice;
}

//frontend UI logic

$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    // Pulls the input values of the user on the HTML to calculate total cost
    var sizeInput = $("#size").val();
//    var toppingsInput = $("#toppings").val();
    var toppingsInput = 0;
    for (i=0;i<document.zaa.topping.length;i++) {
      if (document.zaa.topping[i].checked==true){
        toppingsInput+=1;
      }
    }

    var quantityInput = $("#quantity").val();
    var deliveryInput = $("#delivery").val();
    var newCost = new Parlor(sizeInput, toppingsInput, quantityInput, deliveryInput);
    // Displays the calculated costs to the user
    $(".cost").show();
    $("#displaySize").text(sizeInput);
    $("#displayToppings").text(toppingsInput);
    $("#displayQuantity").text(quantityInput);
    $("#displayDelivery").text(deliveryInput);
    $("#displayCost").text(newCost.pizzaPrice());
  })
})
