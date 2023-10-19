
function initialize() {

  numOfPennies = document.getElementById("pennies");
  numOfNickels = document.getElementById("nickels");
  numOfDimes = document.getElementById("dimes");
  numOfQuarters = document.getElementById("quarters");

  totalMoney = document.getElementById("total");

  pennyTotal = document.getElementById("valueOfPennies");
  nickelTotal = document.getElementById("valueOfNickels");
  dimeTotal = document.getElementById("valueOfDimes");
  quarterTotal = document.getElementById("valueOfQuarters");

  penniesValue = 0.00;
  nickelsValue = 0.00;
  dimesValue = 0.00;
  quartersValue = 0.00;

  pennies = 0;
  nickels = 0; 
  dimes = 0; 
  quarters = 0; 

  sum = 0;

  display();
}


function display() {
  numOfPennies.innerHTML = pennies;
  numOfNickels.innerHTML = nickels;
  numOfDimes.innerHTML = dimes;
  numOfQuarters.innerHTML = quarters;
  pennyTotal.innerHTML = penniesValue;
  nickelTotal.innerHTML = nickelsValue;
  dimeTotal.innerHTML = dimesValue;
  quarterTotal.innerHTML = quartersValue;
  calculateTotalMoney();
  totalMoney.innerHTML = sum;
}


function addPenny() {
  pennies++;
  penniesValue = (pennies * 0.01);
  penniesValue = parseFloat(penniesValue).toFixed(2);
  display();
}
function subtractPenny() {
  if (pennies != 0)
    pennies--;
    penniesValue = (pennies * 0.01);
    penniesValue = parseFloat(penniesValue).toFixed(2);
  display();
}


function addNickel() {
  nickels++;
  nickelsValue = (nickels * 0.05);
  nickelsValue = parseFloat(nickelsValue).toFixed(2);
  display();
}
function subtractNickel() {
  if (nickels != 0)
    nickels--
    nickelsValue = (nickels * 0.05);
    nickelsValue = parseFloat(nickelsValue).toFixed(2);
  display();
}


function addDime() {
  dimes++;
  dimesValue = (dimes * 0.10);
  dimesValue = parseFloat(dimesValue).toFixed(2);
  display();
}
function subtractDime() {
  if (dimes != 0)
    dimes--
    dimesValue = (dimes * 0.10);
    dimesValue = parseFloat(dimesValue).toFixed(2);
  display();
}


function addQuarter() {
  quarters++;
  quartersValue = (quarters * 0.25);
  quartersValue = parseFloat(quartersValue).toFixed(2);
  display();
}
function subtractQuarter() {
  if (quarters != 0)
    quarters--
    quartersValue = (quarters * 0.25);
    quartersValue = parseFloat(quartersValue).toFixed(2);
  display();
}


function calculateTotalMoney() {
  sum = (quarters * 0.25) + (dimes * 0.10) + (nickels * 0.05) + (pennies * 0.01);
  sum = parseFloat(sum).toFixed(2);
}
