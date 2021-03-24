class Donut {
    constructor() {
        this._value = 0;
        this._autoClicker = 0;
        this._autoClickerCost = 100;
        this._donutMultiplierCount = 0;
        this._donutMultiplierCost = 10;
        this._donutsEarnedPerClick = 1;
    }

    // Getters
    getDonutCount()     //returns current value
    {
        return this._value;
    }

    getautoClicker()
    {
        return this._autoClicker;
    }

    getdonutMultiplierCount()
    {
        return this._donutMultiplierCount;
    }

    getdonutsEarnedPerClick()
    {
        return this._donutsEarnedPerClick;
    }

    getautoClickerCost()
    {
        return this._autoClickerCost;
    }

    getdonutMultiplierCost(){
        return this._donutMultiplierCost;
    }

    add_donutCount()    //  Needs to account for multipliers
    {
         // value = element.innerHTML;
        let donutsEarned = Math.pow(this._donutsEarnedPerClick, this._donutMultiplierCount);
        console.log(donutsEarned);
     //   this._value += donutsEarned;      // This will be removed for multipliers.. Needs to calculate donuts earned per click
        this._value += this._donutsEarnedPerClick;
        this._value=Math.floor(this._value);
       // console.log(value);
       // updateText();
    }

   

    buy_autoClicker = () =>{
        if(this._value >= this._autoClickerCost){
            this._autoClicker++;
            this._value -= Math.floor(this._autoClickerCost);
            this._autoClickerCost += (this._autoClickerCost * 0.10);    // changed from 0.20
            var autoTimer = setInterval(this.autoUpdate,1000);              // Timer
        }
    }

    // buy_multiplier

    autoUpdate = () =>{
        console.log("Calling Auto update!");
        console.log(this._autoClicker);
        for(let index = 0; index < this._autoClicker; index++)      // for every autoclicker
        {
            this.add_donutCount();
        }
    }


    buy_donutMultiplier = () =>{
        if(this._value >= this._donutMultiplierCost){
            this._donutMultiplierCount++;
            this._value -= Math.floor(this._donutMultiplierCost);
            this._donutMultiplierCost += (this._donutMultiplierCost * 0.10);
            this._donutsEarnedPerClick += (this._donutsEarnedPerClick * 1.20);
        }
    }

    multiplierUpdate = () => {
        console.log("Calling Multiplier Update");
        for(let index = 0; index < this._donutMultiplierCount; index++)
        {
            this.add_donutCount();
        }
    }
}