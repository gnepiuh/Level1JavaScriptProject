function initialize() {

    NumOfPennies = document.getElementById("pennies");
    NumOfNickels = document.getElementById("nickels");
    NumOfDimes = document.getElementById("dimes");
    NumOfQuarters = document.getElementById("quarters");
    NumOfHalfs = document.getElementById("halfdollars");
    NumOfDolls = document.getElementById("dollars");
    SumOfCoins = document.getElementById("total");

    totalPennies = document.getElementById("valueOfPennies");
    totalNickels = document.getElementById("valueOfNickels");
    totalDimes = document.getElementById("valueOfDimes");
    totalQuarters = document.getElementById("valueOfQuarters");
    totalHalfDolls = document.getElementById("valueOfHalfDollars");
    totalQuarters = document.getElementById("valueOfDollars");

    pennyValue = 0.00;
    nickelValue = 0.00;
    dimeValue = 0.00;
    quarterValue = 0.00;
    halfDollarValue = 0.00;
    dollarValue = 0.00;
    




    pennies= 0;
    nickels = 0; 
    dimes = 0; 
    quarters = 0; 
    halfdollars = 0;
    dollars = 0;
    total = 0;

    Pennie = document.getElementById(NumOfPennies);
    Pennie.innerHTML = pennies;
    display();
  }