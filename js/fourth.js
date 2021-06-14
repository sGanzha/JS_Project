// 1.
// Написать функцию которая вернет сумму переданных фактических аргументов (аргументов может быть сколько угодно)

// function returnSum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// let x = returnSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(x);

// 2.
// Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
// Функция должна расчитывать результат операции, исходя из переданного ей знака.
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.

// let o1 = +prompt("Введите первый операнд");
// let o2 = +prompt("Введите второй операнд");
// let sign = prompt("Введите знак");

// function calculate(operand1, operand2, sign) {
//         if (isNaN(operand1||operand2)) result ='Операнд должен быть числом';
//     	switch (sign) {
// 		case '+':
// 			result = operand1 + operand2;
// 			break;
// 		case '-':
// 			result = operand1 - operand2;
// 			break;
// 		case '/':
// 			result = operand1 / operand2;
// 			break;
// 		case '*':
// 			result = operand1 * operand2;
// 			break;	
// 		case '%':
// 			result = operand1 % operand2;
// 			break;	
// 		case '^':
// 			result = operand1 ** operand2;
// 			break;															
// 		default:
// 			result = 'нет такой операции';
// 			break;
// 	}
//     return result;
// }

// let x = calculate(o1,o2,sign);
// console.log(x);

// 3.
// Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.

// function fib(n) {
//     let a = 1;
//     let b = 1;
//     let c;

//     for (let i = 3; i <= n; i++) {
//         c = a + b;
//         a = b;
//         b = c;
//     }
//     return c;
// }

// let x=(fib(10));
// console.log(x);

// 4. (+ 10 баллов)
// Функция должна вернуть массив из центральных элементов переданных массивов (сколько угодно массивов).
// Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3
// Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4
// результат примера [3,3,4]

// оптимизировать код

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 5, 6];
// let arr3 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8];


// function foo() {
// 	let mass = [];
//     let center;
// 	for (let i = 0; i < arguments.length; i++) {
//         center=	Math.floor(arguments[i].length/2);
//         if (arguments[i].length % 2 ==0){
//             mass.push(arguments[i][center-1],arguments[i][center]);
//         }else{
// 		mass.push(arguments[i][center]);
// 	}
// }
// 	return mass;
// }

// let x = foo(arr1,arr2,arr3,arr4);
// console.log(x);

