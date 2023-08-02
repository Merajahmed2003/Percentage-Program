
var ChemistryMarks = +prompt("Enter the marks obtained in Chemistry:")
var PhysicsMarks = +prompt("Enter the marks obtained in Physics:")
var MathsMarks = +prompt("Enter the marks obtained in Maths:")
var EnglishMarks = +prompt("Enter the marks obtained in English:")


var totalMarks = 400;
var MarksObtained = ChemistryMarks + PhysicsMarks + MathsMarks + EnglishMarks
var percentage = ( MarksObtained / totalMarks ) * 100

alert(`Total Marks: ${totalMarks}\nMarks Obtained: ${MarksObtained}\nPercentage: ${percentage}%`)