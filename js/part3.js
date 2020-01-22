
function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);
  var floatString = document.getElementById("3_Float").value;
  var decimalPoint = floatString.indexOf(".");
  
  var wholeNumber = parseInt (floatString.substring(0,decimalPoint));
  console.log("Whole Number: " + wholeNumber);
  var mantissa = parseFloat(floatString.substring(decimalPoint));
  console.log("Mantissa: "+ mantissa);

  var wholeNumberBinary;
  //binary rep
  var runningString="";
  var i=wholeNumber;
  var mod, div;
  while (i>0) {
    console.log(i);
    mod = i%2;
    div = i/2;
    console.log("Mod:" + mod);
    console.log("Div: "+div);
    runningString=""+mod+""+runningString;
    i=Math.floor(div);
  }

  wholeNumberBinary=runningString;
  if (wholeNumberBinary.length==0) {
    wholeNumberBinary="0";
  }

  var mantissaBinary;

  runningString="";
  i=mantissa;
  var sub, mult;
  
  while (i!=1&&runningString.length<24) {
    i=i*2;
    console.log(i);
    if (i>=1) {
      runningString+="1";
      i=i-1;
    }
    else {
      runningString+="0";
    }
  }

  mantissaBinary=runningString;
  
  var multiplierPoint;

  for (var j = 0; j<mantissaBinary.length; j++) {
    console.log("Char at: "+mantissaBinary.charAt(j));
    if (mantissaBinary.charAt(j)=="1") {
      multiplierPoint=j;
    }
  }
  console.log("Multiplier Point: " + multiplierPoint);

  var multiplierBinary;

  runningString="";
  i=multiplierPoint;
  var mod, div;
  while (i>0) {
    console.log(i);
    mod = i%2;
    div = i/2;
    console.log("Mod:" + mod);
    console.log("Div: "+div);
    runningString=""+mod+""+runningString;
    i=Math.floor(div);
    console.log("Current Multiplier " + runningString);
  }

  multiplierBinary=runningString;
  console.log("Multiplier binary: " + multiplierBinary);

  var output32BitScientificNotation = " Whole Number Binary: "+wholeNumberBinary;
  output32BitScientificNotation += " Mantissa Binary: " + mantissaBinary;
  output32BitScientificNotation +=" Scientific Notation Binary: " + multiplierBinary;

  // Show the output on the screen
  FormatAndShowOutput([floatToConvert, output32BitScientificNotation], 3);
}

function isDecimal (numberString) {
  var num = parseInt(numberString);
  if (num>1) {
    return true;
  } 
  return false;
}

// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001

// For the final 32 bits.. we have
// ... so 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0
