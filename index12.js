/*Q no 12
Write a js program to input marks of five subjects Physics, Chemistry,
Biology, Mathematics, and Computer. Calculate percentage and grade
according to the following:
Percentage >= 90% : Grade A
Percentage >= 80% : Grade B 
Percentage >= 70% : Grade C
Percentage >= 60% : Grade D
Percentage >= 40% : Grade E
Percentage < 40% : Grade F */
let physics = 100;
let chemistry = 100;
let biology = 40;
let mathematics = 80;
let computer = 90;
let sum = physics + chemistry + biology + mathematics + computer
if(sum/500* 100 >=90 && sum/500*100 <=100){
    console.log("A");
}
else if(sum/500* 100 >=80 && sum/500*100 <=89){
    console.log("B");
}
else if(sum/500* 100 >=70 && sum/500*100 <=79){
    console.log("C");
}
else if(sum/500* 100 >=60 && sum/500*100 <=69){
    console.log("D");
}
else if(sum/500* 100 >=40 && sum/500*100 <=59){
    console.log("E");
}
else if(sum/500* 100 >=0 && sum/500*100 <=40){
    console.log("F");
}
else{
    console.log("Invalid marks");
}


































































