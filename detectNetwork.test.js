/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
/*var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});*/
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 17', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  for (var prefix = 644; prefix <= 649; prefix++) {
 
    (function(prefix) {
   
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
       detectNetwork(parseInt(prefix) + '1234567891345').should.equal('Discover');
      });
       it('has a prefix of ' + prefix + ' and a length of 19', function() {
       detectNetwork(parseInt(prefix) + '1234567891234456').should.equal('Discover');
      });
   
    })(prefix)
  }

  it("has a prefix of 65 and a length of 16", function (){
    detectNetwork("6556473825362563").should.equal("Discover");
  });

  it("has a prefix of 65 and a length of 19", function (){
    detectNetwork("6556473825362563456").should.equal("Discover");
  });

   it("has a prefix of 6011 and a length of 16", function (){
    detectNetwork("6011263546372634").should.equal("Discover");
  });

   it("has a prefix of 6011 and a length of 19", function (){
    detectNetwork("6011263546372633334").should.equal("Discover");
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  it('has a prefix of 5018 and a length of 12', function () {
    detectNetwork('501812333333').should.equal("Maestro");
  });
  it('has a prefix of 5018 and a length of 13', function () {
    detectNetwork('5018123333334').should.equal("Maestro");
  });
  it('has a prefix of 5018 and a length of 14', function () {
    detectNetwork('50181233333344').should.equal("Maestro");
  });
  it('has a prefix of 5018 and a length of 15', function () {
    detectNetwork('501812333333444').should.equal("Maestro");
  });
  it('has a prefix of 5018 and a length of 16', function () {
    detectNetwork('5018123333334444').should.equal("Maestro");
  });
  it('has a prefix of 5018 and a length of 17', function () {
    detectNetwork('50181233333344444').should.equal("Maestro");
  });
  it('has a prefix of 5018 and a length of 18', function () {
    detectNetwork('501812333333444444').should.equal("Maestro");
  });
  it('has a prefix of 5018 and a length of 19', function () {
    detectNetwork('5018123333334444444').should.equal("Maestro");
  });
//---------------------------------------prefix of 5020-----------------------------------
  it('has a prefix of 5020 and a length of 12', function () {
    detectNetwork('502012333333').should.equal("Maestro");
  });
  it('has a prefix of 5020 and a length of 13', function () {
    detectNetwork('5020123333334').should.equal("Maestro");
  });
  it('has a prefix of 5020 and a length of 14', function () {
    detectNetwork('50201233333344').should.equal("Maestro");
  });
  it('has a prefix of 5020 and a length of 15', function () {
    detectNetwork('502012333333444').should.equal("Maestro");
  });
  it('has a prefix of 5020 and a length of 16', function () {
    detectNetwork('5020123333334444').should.equal("Maestro");
  });
  it('has a prefix of 5020 and a length of 17', function () {
    detectNetwork('50201233333344444').should.equal("Maestro");
  });
  it('has a prefix of 5020 and a length of 18', function () {
    detectNetwork('502012333333444444').should.equal("Maestro");
  });
  it('has a prefix of 5020 and a length of 19', function () {
    detectNetwork('5020123333334444444').should.equal("Maestro");
  });
  //-------------------------------------------prefix of 5038------------------------------
  it('has a prefix of 5038 and a length of 12', function () {
    detectNetwork('503812333333').should.equal("Maestro");
  });
  it('has a prefix of 5038 and a length of 13', function () {
    detectNetwork('5038123333334').should.equal("Maestro");
  });
  it('has a prefix of 5038 and a length of 14', function () {
    detectNetwork('50381233333344').should.equal("Maestro");
  });
  it('has a prefix of 5038 and a length of 15', function () {
    detectNetwork('503812333333444').should.equal("Maestro");
  });
  it('has a prefix of 5038 and a length of 16', function () {
    detectNetwork('5038123333334444').should.equal("Maestro");
  });
  it('has a prefix of 5038 and a length of 17', function () {
    detectNetwork('50381233333344444').should.equal("Maestro");
  });
  it('has a prefix of 5038 and a length of 18', function () {
    detectNetwork('503812333333444444').should.equal("Maestro");
  });
  it('has a prefix of 5038 and a length of 19', function () {
    detectNetwork('5038123333334444444').should.equal("Maestro");
  });
  //------------------------------------------prefix of 6304----------------------
  it('has a prefix of 6304 and a length of 12', function () {
    detectNetwork('630412333333').should.equal("Maestro");
  });
  it('has a prefix of 6304 and a length of 13', function () {
    detectNetwork('6304123333334').should.equal("Maestro");
  });
  it('has a prefix of 6304 and a length of 14', function () {
    detectNetwork('63041233333344').should.equal("Maestro");
  });
  it('has a prefix of 6304 and a length of 15', function () {
    detectNetwork('630412333333444').should.equal("Maestro");
  });
  it('has a prefix of 6304 and a length of 16', function () {
    detectNetwork('6304123333334444').should.equal("Maestro");
  });
  it('has a prefix of 6304 and a length of 17', function () {
    detectNetwork('63041233333344444').should.equal("Maestro");
  });
  it('has a prefix of 6304 and a length of 18', function () {
    detectNetwork('630412333333444444').should.equal("Maestro");
  });
  it('has a prefix of 6304 and a length of 19', function () {
    detectNetwork('6304123333334444444').should.equal("Maestro");
  });

});
 //----------------------------------------China UnionPay -----------------------------------------------------
 describe("China UnionPay", function(){
  for (var prefix = "622126"; prefix < "622926"; prefix ++){
    var card = prefix + '1234567890';
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(card).should.equal("China UnionPay");
      });
    })(card, prefix);
  };

  for (var prefix = "622126"; prefix < "622926"; prefix ++){
    var card = prefix + '12345676890';
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        detectNetwork(card).should.equal("China UnionPay");
      });
    })(card, prefix);
  };

  for (var prefix = "622126"; prefix < "622926"; prefix ++){
    var card = prefix + '123456667890';
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        detectNetwork(card).should.equal("China UnionPay");
      });
    })(card,prefix);
  };

  for (var prefix = "622126"; prefix < "622926"; prefix ++){
    var card = prefix + '1234567677890';
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(card).should.equal("China UnionPay");
      });
    })(card,prefix);
  };

  for (var prefix = "624"; prefix < "627"; prefix ++){
    var card = prefix + "2345678912345";
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork(card).should.equal("China UnionPay");
      });
    })(card,prefix);
  };

  for (var prefix = "624"; prefix < "627"; prefix ++){
    var card = prefix + "23456789123745";
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        detectNetwork(card).should.equal("China UnionPay");
      });
    })(card,prefix);
  };

  for (var prefix = "624"; prefix < "627"; prefix ++){
    var card = prefix + "234567891277345";
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        detectNetwork(card).should.equal("China UnionPay");
      });
    })(card,prefix);
  };

  for (var prefix = "624"; prefix < "627"; prefix ++){
    var card = prefix + "2345678977123456";
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork(card).should.equal("China UnionPay");
      });
    })(card,prefix);
  };

  for (var prefix = "6282"; prefix <= "6288"; prefix ++){
    var card = prefix + '123456789123';
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 16', function (){
        detectNetwork(card).should.equal("China UnionPay");
      });
    })(card,prefix);
  };

  for (var prefix = "6282"; prefix <= "6288"; prefix ++){
    var card = prefix + '1234567891237';
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 17', function (){
        detectNetwork(card).should.equal("China UnionPay");
      });
    })(card,prefix);
  };
  for (var prefix = "6282"; prefix <= "6288"; prefix ++){
    var card = prefix + '12345678977123';
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 18', function (){
        detectNetwork(card).should.equal("China UnionPay");
      });
    })(card,prefix);
  };
  for (var prefix = "6282"; prefix <= "6288"; prefix ++){
    var card = prefix + '123456789777123';
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 19', function (){
        detectNetwork(card).should.equal("China UnionPay");
      });
    })(card,prefix);
  };
 });
//------------------------------------------------------------------Tests for Switch ----------------------------------------------//
 describe("Switch", function(){
   it('has a prefix of 4903 and a length of 16', function (){
     detectNetwork('4903123456789123').should.equal("Switch");
   });

   it('has a prefix of 4903 and a length of 18', function (){
    detectNetwork('490312345678916623').should.equal("Switch");
  });
  it('has a prefix of 4903 and a length of 19', function (){
    detectNetwork('4903123456789654123').should.equal("Switch");
  });
  //--------------------prefix of 4905 --------------------------------
  it('has a prefix of 4905 and a length of 16', function (){
    detectNetwork('4905123456789123').should.equal("Switch");
  });

  it('has a prefix of 4905 and a length of 18', function (){
   detectNetwork('490512345678916623').should.equal("Switch");
 });
 it('has a prefix of 4905 and a length of 19', function (){
   detectNetwork('4905123456789654123').should.equal("Switch");
 });
 //--------------------------------prefix of 4911----------------------
 it('has a prefix of 4911 and a length of 16', function (){
  detectNetwork('4911123456789123').should.equal("Switch");
});

it('has a prefix of 4911 and a length of 18', function (){
 detectNetwork('491112345678916623').should.equal("Switch");
});
it('has a prefix of 4911 and a length of 19', function (){
 detectNetwork('4911123456789654123').should.equal("Switch");
});
//----------------------------------prefix of 4936-----------------------
it('has a prefix of 4936 and a length of 16', function (){
  detectNetwork('4936123456789123').should.equal("Switch");
});

it('has a prefix of 4936 and a length of 18', function (){
 detectNetwork('493612345678916623').should.equal("Switch");
});
it('has a prefix of 4936 and a length of 19', function (){
 detectNetwork('4936123456789654123').should.equal("Switch");
});
//--------------------------- prefix of 6333 --------------------------------
it('has a prefix of 6333 and a length of 16', function (){
  detectNetwork('6333123456789123').should.equal("Switch");
});

it('has a prefix of 6333 and a length of 18', function (){
 detectNetwork('633312345678916623').should.equal("Switch");
});
it('has a prefix of 6333 and a length of 19', function (){
 detectNetwork('6333123456789654123').should.equal("Switch");
});
//--------------------------- prefix of 6759 ---------------------------------
it('has a prefix of 6759 and a length of 16', function (){
  detectNetwork('6759123456789123').should.equal("Switch");
});

it('has a prefix of 6759 and a length of 18', function (){
 detectNetwork('675912345678916623').should.equal("Switch");
});
it('has a prefix of 6759 and a length of 19', function (){
 detectNetwork('6759123456789654123').should.equal("Switch");
});
//------------------------------ prefix of 564182 -------------------------------
it('has a prefix of 564182 and a length of 16', function (){
  detectNetwork('5641823456789123').should.equal("Switch");
});

it('has a prefix of 564182 and a length of 18', function (){
 detectNetwork('564182345678916623').should.equal("Switch");
});
it('has a prefix of 564182 and a length of 19', function (){
 detectNetwork('5641823456789654123').should.equal("Switch");
});
//---------------------------------- prefix of 633110 --------------------------------
it('has a prefix of 633110 and a length of 16', function (){
  detectNetwork('6331103456789123').should.equal("Switch");
});

it('has a prefix of 633110 and a length of 18', function (){
 detectNetwork('633110345678916623').should.equal("Switch");
});
it('has a prefix of 633110 and a length of 19', function (){
 detectNetwork('6331103456789654123').should.equal("Switch");
});
 });
