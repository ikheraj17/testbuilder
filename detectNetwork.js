// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  var length = cardNumber.length;
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  var twoNums = '';
  for (var i = 0; i < 2; i ++){
   twoNums = twoNums + cardNumber[i];
  }
  if((twoNums === "38" || twoNums === "39") && (cardNumber.length === 14)){
    return "Diner's Club";
  }
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if((twoNums === "34" || twoNums === "37") && (cardNumber.length === 15)){
    return "American Express";
  }
  // ---------------------------- VISA --------------------------------------------------------------------------------
  
  if((cardNumber[0] === "4") && (length === 13 || length === 16 || length === 19)){
    return "Visa";
  }

  //--------------------------------- MasterCard ------------------------------------------------------------------------

  if((twoNums === "51" || twoNums === "52" || twoNums === "53"|| twoNums === "54"|| twoNums === "55") && (length === 16)){
    return "MasterCard";
  }

};




