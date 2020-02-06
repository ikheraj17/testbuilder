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

  //-------------------------------prefix with length of 2 --------------------------------------------------------
  var twoNums = '';
  for (var i = 0; i < 2; i ++){
   twoNums = twoNums + cardNumber[i];
  }
 //---------------------------------prefix with length of 3 ----------------------------------------------
 var threeNums = '';
 for (var i =0; i < 3; i ++){
   threeNums = threeNums + cardNumber[i];
 }

  //------------------------------- prefix with length of 4 ------------------------------------------------
  var fourNums = '';
  for (var i =0 ; i < 4; i ++){
    fourNums = fourNums + cardNumber[i];
  }

//-------------------------------------Diner's Club -----------------------------------------------------------------

  if((twoNums === "38" || twoNums === "39") && (cardNumber.length === 14)){
    return "Diner's Club";
  }  
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  //---------------------------------- AMEX ----------------------------------------------------------------------------

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

  //----------------------------------- Discover -------------------------------------------------------------------------------

  if(((fourNums === "6011" || threeNums > "643" && threeNums < "650" || twoNums === "65")) && ((length === 16 || length === 19))){
    return "Discover";
  } 

  //-------------------------------------Maestro ---------------------------------------------------------------------------------------
  
  if((fourNums === "5018" || fourNums === "5020" || fourNums === "5038" || fourNums === "6304") && (length >= 12 && length <= 19)){
    return "Maestro";
  }



};






