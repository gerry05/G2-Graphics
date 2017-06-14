 // set up text to print, each item in array is new line
 var aText = new Array(
     "Bringing great designed ideas to completion with affordable solutions for all your creativity  needs.",
     "G2 Graphics design is the right webpage that you're looking for!"
 );
 var iSpeed = 80; // time delay of print out
 var iIndex = 0; // start printing array at this posision
 var iArrLength = aText[0].length; // the length of the text array
 var iScrollAt = 5; // start scrolling up at this many lines

 var iTextPos = 0; // initialise text position
 var sContents = ''; // initialise contents variable
 var iRow; // initialise current row

 function typewriter() {
     sContents = ' ';
     iRow = Math.max(0, iIndex - iScrollAt);
     var destination = document.getElementById("typedtext");

     while (iRow < iIndex) {
         sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
     if (iTextPos++ == iArrLength) {
         iTextPos = 0;
         iIndex++;
         if (iIndex != aText.length) {
             iArrLength = aText[iIndex].length;
             setTimeout("typewriter()", 150);
         }
     } else {
         setTimeout("typewriter()", iSpeed);
     }
 }


 typewriter();