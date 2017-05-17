var dnaTranscriber = function(){};

dnaToRnaMapping = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

dnaTranscriber.prototype.toRna = function(rnaSeq){
  if (typeof(rnaSeq) != 'string'){
    throw new Error('DNA sequence not a string');
  }
  var dnaSeq = '';
  for (var i=0 ; i < rnaSeq.length ; i++){
    if (!dnaToRnaMapping[rnaSeq.charAt(i)]){
      throw new Error('Invalid input');
    }
    dnaSeq = dnaSeq + dnaToRnaMapping[rnaSeq.charAt(i)] ;
  }
  return dnaSeq;
};

module.exports = dnaTranscriber;
