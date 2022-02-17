// function for colling

function minimize(){
  const foodItem = document.getElementById('food-manage');
  const foodItemValue = foodItem.value;
  
  const foodItemInt = parseInt (foodItemValue);
  
  const rentItem = document.getElementById('rent-manage');
  const rentItemValue = rentItem.value;
  const rentItemInt = parseInt (rentItemValue);
  
  const clothItem = document.getElementById('cloth-manage');
  const clothItemValue = clothItem.value;
  const clothItemInt = parseInt (clothItemValue);
  const expenceAllPrice = foodItemInt +rentItemInt + clothItemInt;
  return expenceAllPrice;

};

// function for calculation

  document.getElementById('expence-manage').addEventListener('click', function(){
  
  const expenceAllPrice = minimize();

  const calculateTotal = document.getElementById('total-expence');
  calculateTotal.innerText=expenceAllPrice;
  
  
//   balance calculation

const netIncome = document.getElementById('net-income');
const incomeAll = netIncome.value;

const incomeInt = parseInt(incomeAll);

const freeBalance = incomeInt - expenceAllPrice;

const balance = document.getElementById('free-balance');
balance.innerText = freeBalance;




});



// function for saving amount

document.getElementById('save-maoney').addEventListener('click', function(){
  const netIncome = document.getElementById('net-income');
  const incomeAll = netIncome.value;
  const incomeInt = parseInt(incomeAll);
  const saveBudget = document.getElementById('save-budget');
  const saveBudgetValue = saveBudget.value;
  const saveBudgetInt = parseInt(saveBudgetValue);
  const saveAmount = (incomeInt*saveBudgetInt)/100;
 

//  calculation saving amount 

const savingAmount = document.getElementById('saving-amount');
savingAmount.innerText = saveAmount;

// calculation remaining balance

const expenceAllPrice = minimize();

const remaingBalance = incomeInt - (saveAmount + expenceAllPrice);
const balanceLast = document.getElementById('reaming-balance');
balanceLast.innerText = remaingBalance;

});



