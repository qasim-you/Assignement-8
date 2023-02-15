/*Q no 14
Write a js program to count a minimum number of notes in a given
amount.*/
let sum = 512;
const countNotes = sum => {
   let count = 0;
   while(sum){
      if(sum >= 1000){
         sum -= 1000;
         count++;
         continue;
      }else if(sum >= 500){
         sum -= 500;
         count++;
         continue;
      }else if(sum >= 100){
         sum -= 100;
         count++;
         continue;
      }else if(sum >= 50){
         sum -= 50;
         count++;
         continue;
      }else if(sum >= 20){
         sum -= 20;
         count++;
         continue;
      }else if(sum >= 10){
        sum -= 10;
        count++;
        continue;
     }else if(sum >= 5){
        sum -= 5;
        count++;
        continue;
     }else if(sum >= 2){
        sum -= 2;
        count++;
        continue;
    }else{
        sum -= 1;
        count++;
        continue;
     }
  };
  return count;
};
console.log(countNotes(sum));
