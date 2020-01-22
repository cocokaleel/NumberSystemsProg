function ConversionPart2() {
    //
    var SignedDecimalInt = document.getElementById("2_SignedInt").value;

    var outputValue;
    var positive;
    if (document.getElementById("2_SignedInt").value.charAt(0)=="-") {
        outputValue = parseInt(SignedDecimalInt.substring(1));
        positive=false;
    }
    else {
        outputValue = parseInt(SignedDecimalInt); //only for positive
        positive=true;
    }
    //binary rep
    var runningString="";
    var i=outputValue;
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

    while (runningString.length<=32) {
        runningString=""+"0"+""+runningString;
    }

    outputValue=runningString;


    //Two's Complement
    var runningTwos="";
    var tempChar;
    while (runningString.length>0) {
        tempChar=runningString.charAt(0);
        if (tempChar=="1") {
            runningTwos+="0";
        }
        else {
            runningTwos+="1";
        }
        runningString=runningString.substring(1);
        console.log(tempChar);
    }

    var indexZero = runningTwos.length-1;
    while (runningTwos.charAt(indexZero)!="0") {
        indexZero--;
    }
    
    runningTwos=runningTwos.substring(0,indexZero) + "1" + runningTwos.substring(indexZero+1);
    
    console.log(runningTwos);

    for (var i=indexZero+1; i<runningTwos.length; i++) {
        runningTwos=runningTwos.substring(0,i) + "0" + runningTwos.substring(i+1);
    }

    var outputValueTwosComplement = runningTwos;

    if (!positive) {
        var temp = outputValueTwosComplement;
        outputValueTwosComplement=outputValue;
        outputValue=temp;
    }

    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}
