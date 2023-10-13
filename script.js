// document.getElementById("fish").innerHTML =25+24;
// document.write(68+24);
// window.alert("Great");
// console.log(45*3425);


// VAR
// var x = 35;
// var y = 45;
// var z = x * y;

// document.write(z)
// window.alert(z)
// console.log(z)
// document.getElementById("fish").innerHTML = z;


// LET
// let a = "David";
// let b = " Three";
// let c  = a + b;

// document.write(c)
// window.alert(a+b)
// document.getElementById("fish").innerHTML = c
// console.log(c)


// CONST
// const age = 55;

// let name1 = "Dish";
// let name2 = " High";

// document.getElementById("fish").innerText = age  + name1 + name2;


// const age = 78;
// let name1 = " Hower";
// let name2 = " Grange";

// TO MAKE IT APPEER ON A STRAIGHT ...
// console.log(age + name1 + name2);

// TO BREAK IT 
// console.log(age);
// console.log(name1);
// console.log(name2);


// let x = 20;
// // let y = 50;
// // let z = x /y;
// document.write(z);

// let name1 = "caleb ";
// // let name2 = "neto";
// let number = 23

// let result = name1 + number;
// document.write(result)

// let length = 78;
// let width = 2;

// let area = length * width
// document.write(area )
// document.write("<br>")
// document.write(typeof (area));

// let firstName = "YOLO";
// let lastName = " Gohh";

// document.write(firstName + " " + lastName);
// document.write("<br>");
// document.write(typeof (firstName));

// let x = true
// let y = false;

// document.write(typeof (x));


// DECLARATION OF FUNCTION

// function example(a, b)
// {
//   return a * b; 
// }

// let multiplication = example(56, 78);
// document.write(multiplication)

// DECLARATION OF OBJECTS

// const students = {
//   firstName : "Troy",
//   lastName: "Rush ",
//   sex : 44,
//   school: "Great Academy."
// }
// document.write(students.firstName + " " + students.lastName +
// " is " + students.sex + " and finished from " + students.school);

// const markets = {
//   location : " Yaba ",
//   county : " Honduras ",
//   history : " piece ",
//   firstName : " Denzel "  
// }
//   document.write( markets.firstName + " is ")

// TYPES OF ARRAY

//  const students =[ "Brad", 
//  " Helen",  
//  " Troy",
// " Fish" ];
// document.write(students)

// const students = [];
// students[0] = "Brad";
// students[1] = "Troy";
// students[2] = "Fish";
// students[3] = "Greg";

// document.write(students)

//ACCESSING THE ARRAY THROUGH INDEX...

//   const students =[ "Brad", 
//   " Helen",  
//   " Troy",
//  " Fish" ];

//  document.write(students[2])

// CHANGING THE INDEX

//  const students =[ "Brad", 
//   " Helen",  
//   " Troy",
//   " Fish" ];

//   students[1] = "High"
//   document.write(students)

// CONVERT ARAY TO STRING..

//  const students =[ 
//    " Brad", 
//    " Helen",  
//    " Troy",
//    " Fish" ];
//    document.getElementById("fish").innerHTML = students
//    .toString();


//CREATE A SET

// const fruits = new Set([ "apple", "Fig", " dish"]);
// document.write(fruits.size)

//CREATING AND ADDING THE VALUE OF SETS 
// const fruits = new Set();
// fruits.add("red");
// fruits.add("berry");
// fruits.add("guava");
// document.write(fruits.size)
// document.write(fruits)

// FOR EACH METHOD

// const fruits = new Set([ "apple", " Fig", " dish"]);
// let text = "";
// fruits.forEach(function(value)
// {
//   text += value;
// });

// document.write(text);

//CREATING A MAP

// const fruits = new Map()
//   fruits.set("apple", 100);
//   fruits.set("Fig", 300);
//   fruits.set("dish", 500);
//   fruits.set("pear", 678);

// fruits.delete("apple")
// fruits.clear();


// document.write(fruits.has("mango"))
 ////document.write(fruits.size)

//  const fruits =[
//   "gUAVA", "Dish", "tree"
//  ]

//  let text = "";
//  for (let i = 0;
//   i < fruits.length; i++) {
//     text+=fruits[i] + "<br>";
//   }
//   document.write(text);

//java classes and CLASS CONSTUCTOR
//TO WRITE A CLAss CONSTRUCTOR


//CONSTUCTOR
function User() {
  this.name = "Hiot"
}

let user1 = new User();
let user2 = new User();  

User.prototype.age = 27;
console.log(user1.age)
console.log(user2.age)

