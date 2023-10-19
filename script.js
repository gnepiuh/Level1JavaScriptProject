
function initialize() {
  numOfPennies = document.getElementById("pennies");
  pennyTotal = document.getElementById("valueOfPennies");
  numOfNickels = document.getElementById("nickels");
  nickelTotal = document.getElementById("valueOfNickels");
  numOfDimes = document.getElementById("dimes");
  dimeTotal = document.getElementById("valueOfDimes");
  numOfQuarters = document.getElementById("quarters");
  quarterTotal = document.getElementById("valueOfQuarters");
  total = document.getElementById("total");
  pennies = 0;
  penniesValue = 0;
  nickels = 0; 
  nickelsValue = 0;
  dimes = 0; 
  dimesValue = 0;
  quarters = 0; 
  quartersValue = 0;
  sum = 0;
  display();
}
function display() {
  numOfPennies.innerHTML = pennies;
  pennyTotal.innerHTML = penniesValue;
  numOfNickels.innerHTML = nickels;
  nickelTotal.innerHTML = nickelsValue;
  numOfDimes.innerHTML = dimes;
  dimeTotal.innerHTML = dimesValue;
  numOfQuarters.innerHTML = quarters;
  quarterTotal.innerHTML = quartersValue;
  returnTotal();
  total.innerHTML = sum;
}
function addPenny() {
  pennies++;
  penniesValue = (pennies * .01);
  penniesValue = penniesValue;
  display();
}
function addNickel() {
  nickels++;
  nickelsValue = (nickels * .05);
  nickelsValue = nickelsValue;
  display();
}
function addDime() {
  dimes++;
  dimesValue = (dimes * .10);
  dimesValue = dimesValue;
  display();
}
function addQuarter() {
  quarters++;
  quartersValue = (quarters * .25);
  quartersValue = quartersValue;
  display();
}
function removePenny() {
  if (pennies > 0)
    pennies--;
    penniesValue = (pennies * .01);
    penniesValue = penniesValue;
  display();
}
function removeNickel() {
  if (nickels > 0)
    nickels--;
    nickelsValue = (nickels * .05);
    nickelsValue = nickelsValue;
  display();
}
function removeDime() {
  if (dimes > 0)
    dimes--;
    dimesValue = (dimes * .10);
    dimesValue = dimesValue;
  display();
}
function removeQuarter() {
  if (quarters > 0)
    quarters--;
    quartersValue = (quarters * .25);
    quartersValue = quartersValue;
  display();
}
function returnTotal() {
  sum = penniesValue + nickelsValue + dimesValue + quartersValue;
  sum = sum;
}
