
var Hamming = function(input1, input2) {
  this.input1 = input1;
  this.input2 = input2;
};

Hamming.prototype.compute = function(input1, input2) {
  var difference = 0;

  if (input1.length != input2.length) {
    throw "DNA strands must be of equal length."; //'throw' instead of 'return'
  }

  for (var i = 0; i < input1.length; i++) {
    if (input1.charCodeAt(i) != input2.charCodeAt(i)) {
      difference++;
    }
  }
  return difference;
};

module.exports = Hamming;
