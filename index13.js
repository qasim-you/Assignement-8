
/*Q no 14 
Write a js program to input the basic salary of an employee and calculate
its Gross salary according to the following:
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%*/
let salary = 15000;
if (salary <= 10000 && salary >= 0) {
    console.log("HRA = 20%, DA = 80%")
}
else if (salary <= 20000) {
    console.log("HRA = 25%, DA = 89%")
}
else if (salary > 20000) {
    console.log("HRA = 30%, DA = 95%")
}
else {
    console.log("Invalid ");
}




