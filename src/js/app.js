 // Dom
 const total = document.getElementById('totalDonuts');

 const totalAuto = document.getElementById('totalAutoClickers') ;
 const autoButton = document.getElementById('addClicker');

 const totalMultiplier = document.getElementById('totalMultipliers');
 const multiplierButton = document.getElementById('addMultiplier');

 const valuePerClick = document.getElementById('perClick');

 const resetButton = document.getElementById('resetButton'); // Reset

  //Modal 1
var modal = document.getElementById("myModal");         // Get the modal
var btn = document.getElementById("myBtn");             // Get the button that opens the modal
var span = document.getElementsByClassName("close")[0]  // Get the <span> element that closes the modal

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


// Modal 2
var modal2 = document.getElementById("myModal2");         // Get the modal
var btn2 = document.getElementById("myBtn2");             // Get the button that opens the modal
var span2 = document.getElementsByClassName("close2")[0]  // Get the <span> element that closes the modal

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}


//Modal 3
var modal3 = document.getElementById("myModal3");         // Get the modal
var btn3 = document.getElementById("myBtn3");             // Get the button that opens the modal
var span3 = document.getElementsByClassName("close3")[0]  // Get the <span> element that closes the modal

btn3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

let myDonut = new Donut();

function ResetGame(){
  myDonut = new Donut();
  updateButtons();
  updateText();
}

function updateText()                   // Interacts w/ HTML
{
    total.innerText = myDonut.getDonutCount();
    totalAuto.innerText = myDonut.getautoClicker();
    totalMultiplier.innerText = myDonut.getdonutMultiplierCount();
    valuePerClick.innerText = myDonut.getdonutsEarnedPerClick();

    autoButton.innerText=`Purchase Auto Clicker for: ${myDonut.getautoClickerCost()}`;
    multiplierButton.innerText= `Purchase Multiplier for: ${myDonut.getdonutMultiplierCost()}`;
}


// Feature 1 : Add to donut count and retrieve a donut count
function add_donutCount()
{
    myDonut.add_donutCount();
    updateText();
    updateButtons();
}



// feature 2           
function auto()     // Updates values in JS by 1
{

myDonut.buy_autoClicker();

  updateText();
  updateButtons();
  
}


function autoUpdate(){                  // adds to the value in JS 

   updateText();
   updateButtons();
}

setInterval(updateText, 1000);


// Iteration 2 feature 1
function Multiplier()
{
 myDonut.buy_donutMultiplier();
 updateText();
 updateButtons();
} 

function multiplierUpdate(){
 updateText();
 updateButtons();
}



// Disabler
function updateButtons()
{
  autoButton.disabled = !(myDonut.getDonutCount() >= myDonut.getautoClickerCost());
  multiplierButton.disabled = !(myDonut.getDonutCount() >= myDonut.getdonutMultiplierCost());
}