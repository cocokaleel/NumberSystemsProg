function ConversionPart1() {
    var UnsignedIntString = document.getElementById("1_UnsignedInt").value;
    var UnsignedInt = parseInt(document.getElementById("1_UnsignedInt").value);
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);

    var runningInt=digitAt(UnsignedIntString,0);

    for (i=1;i<UnsignedIntString.length;i++) {
      runningInt*=UnsignedIntBaseFrom;
      runningInt+=digitAt(UnsignedIntString,i);
    }

    var outputValue = runningInt;

    var runningString="";
    var i=outputValue;
    var mod, div;
    while (i>0) {
      console.log(i);
      mod = i%UnsignedIntBaseTo;
      div = i/UnsignedIntBaseTo;
      console.log("Mod:" + mod);
      console.log("Div: "+div);
      runningString=""+mod+""+runningString;
      i=Math.floor(div);
    }

    outputValue=parseInt(runningString);


  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);//original
  // FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, 10, outputValue], 1);


  function digitAt(numString, i) {
    var num=numString.charAt(i);
    return parseInt(num);
  }
}
