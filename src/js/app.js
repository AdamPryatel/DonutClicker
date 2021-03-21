 // Dom
 const total = document.getElementById('totalDonuts');

 const totalAuto = document.getElementById('totalAutoClickers') ;
 const autoButton = document.getElementById('addClicker');

 const totalMultiplier = document.getElementById('totalMultipliers');
 const multiplierButton = document.getElementById('addMultiplier');

 const valuePerClick = document.getElementById('perClick');

 const resetButton = document.getElementById('resetButton'); // Reset

let myDonut = new Donut();


function updateText()                   // Interacts w/ HTML
{
    total.innerText = myDonut.getDonutCount();
    totalAuto.innerText = myDonut.getautoClicker();
    totalMultiplier.innerText = myDonut.getdonutMultiplierCount();
    valuePerClick.innerText = myDonut.getdonutsEarnedPerClick();
}


// Feature 1 : Add to donut count and retrieve a donut count
function add_donutCount()
{
    myDonut.add_donutCount();
    updateText();
}



// feature 2           
function auto()     // Updates values in JS by 1
{

myDonut.buy_autoClicker();

  updateText();
  
}


function autoUpdate(){                  // adds to the value in JS 

   updateText();
}

setInterval(updateText, 1000);


// Iteration 2 feature 1
function Multiplier()
{
 myDonut.buy_donutMultiplier();
 updateText();
} 

function multiplierUpdate(){
 updateText();
}

function resetFunction()
{
  resetButton.innerText = myDonut.resetFunction(); // Reset
  updateText();
}