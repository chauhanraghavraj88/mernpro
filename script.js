// // control flow statements
// // swap two numbers a = 3 , b = 5; 
// // without using third variable and without using arithmetic
// // operator ( + , -) hint - XOR.
// // let a = 3;
// // let b = 5;
// // console.log(a);
// // console.log(b);
// // a = a ^ b;
// // b = a ^ b;
// // a = a ^ b;
// // console.log(a);
// // console.log(b);
// //----------------------------------------------

// // To check a number is even or odd without using 
// // arithmetic operator. num = 21 hint: bitwise AND 1

// // To check largest number among three numbers
// // a = 12  b = 14  c = 11

// //To check a number is positive, negative OR zero.

// // LOOPs
// // for , while , dowhile , for in , for of , nested loop
// // syntax of for loop
// //  for(initilization ; condition ; inre / decre)
// //  {
// //       // code to be execute
// //  }
// // Print all even number from 1 to 30.
// // while loop
// // syntax of while loop
// // initilization
// // while(condtion)
// // {
// //    // code to be execute
// //    inre/ decre
// // }
// // Print all odd number from 100 to 51.
// // do while loop
// // initilization
// // do{
// //     // code to be execute
// //     incre / decre
// // }while(condition)
// // Print all factorial of 5 from 1 to 50.
// // Write a Program to check a number is Prime OR not.
// // a person is eligible to donate blood if age is 
// // greater than 18 and weight is greater or equal to
// // 60 , if not eligible give the reason

// // *
// // * *
// // * * *
// // * * * *

// //  * * * *
// //    * * *
// //      * *
// //        *

// // Functions
// // syntax of non-parameterised
// //   function functionName()
// //   {
// //     // code
// //   }
// //   syntax of parameterised
// //   function functionName(parameters)
// //   {
// //     // code
// //   }
// // Create a function to find the sum of 
// // first n natural number.
// // function display()
// // {
// //     console.log("Display Function");
// // }
// // display();
// // function myName(name)
// // {
// //   console.log("My name is "+ name);
// // }
// // myName("Raghav Raj Chauhan")

// // function sumOfTwo(num1 , num2)
// // {
// //   return num1 + num2;
// // }
// // let result = sumOfTwo(20,10);
// // console.log(result);

// // function sumOfNum(num)
// // {
// //    let sum = 0;
// //    for(let i = 1 ; i <= num ; i++)
// //    {
// //       sum = sum + i;
// //    }
// //  console.log("Sum of numbers is " + sum);
// // }
// // sumOfNum(5);

// // function factorialOfNum(num)
// // {
// //    let fact = 1;
// //    for(let i = 1 ; i <= num ; i++)
// //    {
// //       fact = fact * i;
// //    }
// //  console.log("Factorial of number is " + fact);
// // }
// // factorialOfNum(5);

// // Create a function to check number 
// // is prime OR 

// // Function expression.
// // const f = function(a,b){return a + b;}
// // let result = f(10,5);
// // console.log(result);
// // to check number is even or odd

// // Arrays:-
// // using Array Literals
// // let a = [11,12,13,14,15,16]
// // console.log(a[3])
// // // print all even elements from the array
// // // sum of all elements present in array
// // // average of elements of array
// // // reverse the array
// // // find the maximum element from the array

// // // ---Array using new keyword---
// // let arr = new Array();
// // console.log(arr); 
// // arr[0] = 101;
// // arr[1] = 102;
// // arr[2] = 103;
// // arr[3] = 104;
// // console.log(arr.join(' - '));

// // --- using array constructor ---
// // let arr1 = new Array(1,2,3,4,5);
// // console.log(arr1.join(' -> '));
// // console.log(arr1.length);
// // arr1.push(6); // add the element at last
// // arr1.push(7);
// // console.log(arr1.join(' -> '));
// // arr1.pop(); // remove the element from last
// // console.log(arr1.join(' -> '));
// // console.log(Array.isArray(arr1));
// // console.log(arr1.indexOf(4))
// // console.log(arr1.reverse());

// // ___String___
// // let firstName = "Raghav";
// // console.log(firstName);
// // let middleName = 'Raj'
// // console.log(middleName);
// // console.log(firstName + " " + middleName)
// // let lastName = new String("Chauhan");
// // console.log(lastName);

// // str = "abcdba";
// // console.log(str[3])
// // check palindrome or not
// // number of vowels present in string
// // find the length of the string

// // ----arrow function----
// // functionname = (parameters) => {code}
// // let a = (n1 ,n2) => {return n1+n2;}
// // let a = (n1,n2) => n1+n2;
// // console.log(a(10,20));

// // create arrow function to  perfom basic
// // mathematices operations

// // // having multiple (2 or more) parameters
// // let sum = (x,y) => x+y;
// // console.log(sum(100,50));

// // // if we have no parameter
// // let show = () => {console.log("Default fnc");}
// // show();

// // //  having single parameter
// // let display = (myName) => {return myName;}
// // console.log(display("Raghav Raj Chauhan"));
// // // single parameter can be written 
// // // without paraenthsis.
// // let output = n => n;
// // console.log(output("Raghav"));`

// // callback function:`

// // --- Callback function---
// function myFunction(a,b)
// {
//   console.log(a);
//   b();
// }
// function anotherFunction()
// {
//     console.log("Callback function");
// }
// myFunction(10,anotherFunction);

// //passing multiple function parameters into a function
// function calculator(n1,n2,sum,sub,mul,div)
// {
//    console.log(n1 +"  "+ n2);
//    sum("Sum of number is ",n1,n2);
//    sub(n1,n2);
//    mul(n1,n2);
//    div(n1,n2);
// }
// function add(a,b)
// {
//     console.log(a+b);
// }
// function subtract(a,b)
// {
//     console.log(a-b);
// }
// function multiply(a,b)
// {
//     console.log(a*b);
// }
// function division(a,b)
// {
//     console.log("Divsion of number is ", a/b);
// }
// calculator(20,10,add,subtract,multiply,division)


const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const message = document.getElementById("message");
    emailError.innerText = "";
    passwordError.innerText = "";
    message.innerText = "";
    if (email === "") {
       emailError.innerText =
            "Email is required";
        return;
    }
    if (password === "") {
        passwordError.innerText =
            "Password is required";
        return;
    }
    const correctEmail = "tech3c@gmail.com";
    const correctPassword = "12345";
    if ( email === correctEmail && password === correctPassword)
    {
        message.innerText = "Login Successful!";
    }
    else 
        {
        message.innerText = "Invalid Email or Password";
    }
});