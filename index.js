//Qestion 3.
//Subjects Bolatito needs to take as an Arts Student?

let classGroup = 'Arts Subjects';

if(classGroup == 'Science Subject'){
    console.log('Physics, Chemistry, Biology, Technical drawing, English, Mathematics.');

} else if(classGroup == 'Social Science Subjects'){
    console.log('Accounting, Commerce, Marketing, Geography, English, Mathematics.');

} else if(classGroup == 'Arts Subjects'){
    console.log('Government, Economics, Literature, History, English, Mathematics.');

} else
    console.log('English, Mathematics');

//For Bolatito's class group as an Arts student,subjects she will take are; Government, Economics, Literature, History, English, Mathematics.


//Question 5.
// A program that takes a positive number (num) and finds the power of 2 nearest to that number. 

let num = 80;
let pwr = Math.pow(2, Math.round(Math.log2(num)));
console.log('The number' + pwr + 'is the power of 2 nearest to' + num);

//The number64is the power of 2 nearest to80


