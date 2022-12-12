function checkCashRegister(price, cash, cid) {
  
  let billArr = [["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10], ["FIVE", 5], 
                 ["ONE", 1], ["QUARTER", 0.25], ["DIME", 0.1], ["NICKEL", 0.05], 
                 ["PENNY", 0.01]];
  
  let changeDue = cash - price;
  let sumCash = 0;
  for(let i=0; i<cid.length; i++){
    sumCash += cid[i][1];
  }

  if(sumCash < changeDue){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  if(sumCash === changeDue){
    return {status: "CLOSED", change: cid};
  }

  let revCid = cid.reverse();
  let changeArr = [];
  for(let i=0; i<revCid.length; i++){
    let count = 0;
    while(revCid[i][1] > 0  && changeDue >= billArr[i][1]){
      revCid[i][1] -= billArr[i][1];
      changeDue -= billArr[i][1];

      changeDue = Math.round(changeDue*100)/100; 
      count++;
    }
    if(count > 0){
      changeArr.push([billArr[i][0], billArr[i][1]*count]);
    }    
  }
  
  if(changeDue === 0){ 
    return {status: "OPEN", change: changeArr};
  }
  return {status: "INSUFFICIENT_FUNDS", change: []};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);