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