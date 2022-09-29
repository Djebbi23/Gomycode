var total = document.querySelector(".total-price");
var plusBtns = Array.from(document.querySelectorAll(".plus-btn"));
var minusBtns = Array.from(document.querySelectorAll(".minus-btn"));
var cards = document.querySelectorAll(".card");
var btt = document.getElementById('btn');
var btt1 = document.getElementById('btn1');
var btt2 = document.getElementById('btn2');
var Total = document.getElementById('Total');
var Total1 = document.getElementById('Total1');
var Total2 = document.getElementById('Total2');
var TotalPrice = document.getElementById('TotalPrice');


function totalPrice() {
    var quantities = Array.from(document.querySelectorAll(".qte"));
    var unitPrices = Array.from(document.querySelectorAll(".unit-price"));
    let sum = 0;
    for (let i in quantities) {
      sum = sum + unitPrices[i].innerText * quantities[i].innerText;
    }
    total.innerText = sum;
  }

for (let i = 0; i < plusBtns.length; i++) {
    plusBtns[i].addEventListener("click", function () {
      plusBtns[i].nextElementSibling.innerText++;
      totalPrice();
    });
    minusBtns[i].addEventListener("click", function () {
      if (minusBtns[i].previousElementSibling.innerText > 0) {
        minusBtns[i].previousElementSibling.innerText--;
        totalPrice();
      }
    });
  }





    function Toggle(){
        if( btt.style.color=="red"){
            btt.style.color="grey"
        }
        else{
            btt.style.color="red"
        }
    }
    function Toggle1(){
        if( btt1.style.color=="red"){
            btt1.style.color="grey"
        }
        else{
            btt1.style.color="red"
        }
    }
    function Toggle2(){
        if( btt2.style.color=="red"){
            btt2.style.color="grey"
        }
        else{
            btt2.style.color="red"
        }
    }
    function removeDummy() {
        var elem = document.getElementById('dummy');
        elem.parentNode.removeChild(elem);
        totalPrice()
        return false;
        
    }
    function removeCat() {
        var elem = document.getElementById('Cat');
        elem.parentNode.removeChild(elem);
        totalPrice();
        return false;
        
    }
    function removeDog() {
        var elem = document.getElementById('Dog');
        elem.parentNode.removeChild(elem);
        totalPrice();
        return false;
       
    }
   
   
        