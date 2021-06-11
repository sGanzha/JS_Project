// const age = 20;

// if(age < 18) {
// 	console.log("Вход запрещен");
// } else if(age > 60) {
// 	console.log("Хватит работать");
// } else {
// 	console.log("Входите");
// }



// function foo2() {
// 	console.log('это функция');
// }

// foo2();
// foo2();
// foo2();
// foo2();
// foo2();



// const age = 20;




// function showMassende() {
// 	if(age < 18) {
// 		console.log("Вход запрещен");
// 	} else if(age > 60) {
// 		console.log("Хватит работать");
// 	} else {
// 		console.log("Входите");
// 	}
// }


// showMassende();





// let login;
// let password;
// let repeater;

// function getUserInfo() {
//     login = prompt("Введите логин:");
//     password = prompt("Введите пароль:");
// }


// function showUserInfo() {
//     document.write("Login: " + login + "<br />");
//     document.write("Password: " + password + "<br />");
// }

// do {
//     getUserInfo();
//     showUserInfo();
//     repeater = confirm("Пройти заполнение еще раз?")
// } while (repeater);




// function foo(a = 1,b = 2) {
// 	console.log(a + b);
// }
// const x = 20;
// const y = 40;

// const a = 10;

// function foo(a,b) {
// 	console.log('in func', a);
// 	// console.log(a + b);
// }

// console.log(a);

// foo(x,y);


// function showMassende(age) {
// 	if(age < 18) {
// 		console.log("Вход запрещен");
// 	} else if(age > 60) {
// 		console.log("Хватит работать");
// 	} else {
// 		console.log("Входите");
// 	}
// }

// showMassende(15);
// showMassende(18);
// showMassende(50);
// showMassende(70);




// function foo() {
// 	return 10;
// }
// let x = foo();

// console.log(foo());
// console.log(foo);









// function showMassende(age) {
// 	let r;
// 	if(age < 18) {
// 		r = "Вход запрещен";
// 	} else if(age > 60) {
// 		r = "Хватит работать";
// 	} else {
// 		r = "Входите";
// 	}
// 	return r;	
// }

// const x = showMassende(20);
// console.log(x);






// function foo4() {
	
// 	return 
// 	10;	
// 	console.log('код до return');
// }


// foo4();



// function foo5() {
// 	let r = 5 + 6;
// 	let s = 10 + 7;
// 	return [r,s];
// }
// let d = foo5();
// console.log(d[0]);





// scope область видимости


// let x = 10;

// function foo9() {	// --> window
// 	let x = 30;
// 	console.log('foo9 ', x);
// }

// foo9();
// console.log(x);


// let x = 1;

// function foo10() {
// 	x += 2;
// 	console.log(x);
// }

// foo10();

// console.log(x);




// let x = 1;
// console.log(x, 'global');



// function foo() { // --> window

//     console.log(x, 'foo()');
//     function foo2(){ //--> foo

//         console.log(x, 'foo2()');
//     }
//     foo2();
// }


// foo();

// console.log(x, 'global');





/*let x = 1;

function foo() {
	let x = 2;
	console.log('foo', x);
	foo2();
}

function foo2() { 
	console.log('foo2', x);
}

foo();
*/














// let param = "Nik";

// function name (param) {
//     console.log(param, 'in func');
// }

// name('Sergey');
// console.log(param, 'out func');




// let param = 'Olja';

// function name () {
//     param = 'Valja';
//     console.log(param);  // ?
// }

// name();
// console.log(param);     // ?




//Напишите функцию max(x,y), которая возвращает большее из чисел x и y.

// function max(x,y){
// 	if(x > y) {
// 		return x;
// 	}
// 	return y;
// }

// console.log(max(8,45));



// Написать функцию заполнения массива случайными числамии.
// function array(num)
// Где num – размер массива
// 


// function arrayFunc(num, max, min) {
// 	let array = new Array(num);
// 	for(let i = 0; i < array.length; i++) {
// 		array[i] = Math.floor(Math.random() * (max - min) + min);
// 	}
// 	return array;
// }

// console.log(arrayFunc(10, 150, 30));
// console.log(arrayFunc(8, 40, 10));
// console.log(arrayFunc(5, 150, 10));



//-------------------------------------------------------
// Написать функцию myMath(x, znak, y), которая получает 3 аргумента: 
// числа x и y, строку znak. 
// Все аргументы принять от польльзователя
// Знак может быть: +, -, *, /, %, ^. 
// Вывести результат математического действия, указанного в переменной znak.


// const a = +prompt('Enter 1 num', '10');
// const zn = prompt('Enter znak', '-');
// const b = +prompt('Enter 2 num', '10');

// function myMath(x, znak, y) {
// 	let result;
// 	switch (znak) {
// 		case '+':
// 			result = x + y;
// 			break;
// 		case '-':
// 			result = x - y;
// 			break;
// 		case '/':
// 			result = x / y;
// 			break;
// 		case '*':
// 			result = x * y;
// 			break;	
// 		case '%':
// 			result = x % y;
// 			break;	
// 		case '^':
// 			result = x ** y;
// 			break;															
// 		default:
// 			result = 'нет такой операции';
// 			break;
// 	}
// 	return result;
// }
// console.log(myMath(a, zn, b));




//-------------------------------------------



// function foo() {
// 	for(let i = 0; i < arguments.length; i++) {
// 		console.log(arguments[i]);
// 	}
// }

// foo(10,20,30);




// function foo() {
// 	// let arg = arguments;
// 	let arg = Array.from(arguments);
// 	console.log(arg);
// 	arg.push(50);
// 	console.log(arg);
// }

// foo(10,20,30);





// написать функцию, которая примет как аргумент(параметр) два и более массива 
// и сравнить суммы всех элементов.
// Тот массив, сумма которого большая - должен вернутся функцией.


// const arr1 = [1,2,3];
// const arr2 = [1,2,4];
// const arr3 = [1,2,2];


// function foo10() {
// 	let countMain = 0;
// 	let arrayMax;
// 	for(let i = 0; i < arguments.length; i++) {
// 		let count = 0;
// 		for(let j = 0; j < arguments[i].length; j++) {
// 			count += arguments[i][j];
// 		}
// 		if (count > countMain) {
// 			countMain = count;
// 			arrayMax = arguments[i];
// 		}
// 	}
// 	return arrayMax;
// }


// let x = foo10(arr1, arr2, arr3);
// console.log(x);


// function() {
// 	console.log('lorem');
// }


// (function() {
// 	console.log('lorem');
// })();

// if(true) {

// 	function foo3() {
// 		console.log('lorem');
// 	}

// 	foo3();

// }

// const foo4 = function() {
// 	console.log('lorem');
// }

//-------------------------------------------

// let x = function(a,b) {
// 	a + b;
// }
// let y = (a,b) => a + b;
// console.log(x(1,2));
// console.log(y(1,2));


//-------------------------------------------
// 3. 
// Напишите функцию, которая возвращает n-е число Фибоначчи. 
// Для решения используйте цикл.



// function fiba(x){
// 	let a1 = 0;
// 	let a2 = 1
// 	let c = a1 + a2;

// 	if(x == 0) {
// 		console.log('укажите число больше нуля');
// 	} else if (x == 1 || x == 2) {
// 		console.log(1);
// 	} else {
// 		for(let i = 3; i <= x; i++) {
// 			a1 = a2;
// 			a2 = c;
// 			c = a1 + a2;
// 		}
// 		console.log(c);
// 	}

// }

// const x = +prompt('enter num','10');
// fiba(x);







// Функция должна вернуть массив из центральных элементов переданных массивов (сколько угодно массивов).
// Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3
// Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4 
// результат примера [3,3,4]

// оптимизировать код





let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 5, 4, 5, 6];


function foo() {
	let mass = [];
	for (let i = 0; i < arguments.length; i++) {
		let center = Math.floor(arguments[i].length/2);
		mass.push(arguments[i][center]);
		if(true) {

		}
	}
	return mass;
}

let x = foo(arr1,arr2);
console.log(x);



// let array = [1, 2, 3, 4, 5];
// console.log(array[Math.floor(array.length/2)]);









































