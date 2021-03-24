 // Dom
 const total = document.getElementById('totalDonuts');

 const totalAuto = document.getElementById('totalAutoClickers') ;
 const autoButton = document.getElementById('addClicker');

 const totalMultiplier = document.getElementById('totalMultipliers');
 const multiplierButton = document.getElementById('addMultiplier');

 const valuePerClick = document.getElementById('perClick');

 const resetButton = document.getElementById('resetButton'); // Reset

  //Modal
  //  const modal = document.getElementById('companyModal');
  //  const modalButton = document.querySelectorAll('testButton');
  //  const closeModal = document.querySelectorAll('.close');

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


// // Modal
  // function modal()
  // {
  //   modal.style.display="block";
  // }

  // function closeModal()
  // {
  //   modal.style.display = "none";
  // }