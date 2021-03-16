// Dom
 const total = document.getElementById('totalDonuts');
 const Maker = document.getElementById('donutMaker');

// Game Variables
 let value = 0;



// Feature 1 : Add to donut count and retrieve a donut count
function add_donutCount()
{
    var element = document.getElementById('totalDonuts')
    var value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('totalDonuts').innerHTML = value;
}
add_donutCount() 


// Feature 2 : Be able to purchase the first Auto Clicker with 100 donuts from your donut count.
 // Feature 2.a : Buy AutoClicker
//  function add_Autoclicker(){

//     const autoClicker = document.getElementById('addClicker');

//     autoClicker.addEventListener("click", ()=> {
//         clicks -= 100;
//     })

//  }
