 function myFunction() {
     var nav = document.getElementById("myTopnav");
     var nav1 = document.getElementById("nav-link");
     var logo = document.getElementById("g2-logo");
     if (nav.className === "topnav") {
         nav.className += " responsive";
         logo.style.display = 'none';
         nav1.style.marginTop = "0px";
         nav.style.backgroundColor = "#333";
     } else {
         nav.className = "topnav";
         logo.style.display = 'initial';
         nav.style.backgroundColor = "transparent";


     }
 }