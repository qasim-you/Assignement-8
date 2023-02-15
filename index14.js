/*Q no 14
Write a js program to input electricity unit charges and calculate total
electricity bill according to the given condition:
For the first 50 units Rs. 0.50/unit
For the next 100 units Rs. 0.75/unit
For the next 100 units Rs. 1.20/unit
For units above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill*/

let units = 1000
 let bill = 0


if(units<=50){
    bill  = units*1
  }
  else if(units <=150){
    bill = 50*1 + (units-50)*2
  }
  else if(units <=250){
    bill = 50*1 + 100*2 + (units-150)*3
  }
  else if(units>250){

bill = 50*1 + 100*2 + 150*3 + (units-250) *4
}

if(bill>150){
  bill = bill + bill*0.2
}

console.log(bill)
































































