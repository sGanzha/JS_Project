// let foo = function() {
// 	console.log('ok');
// }
// function fooMain(x) {
// 	x();
// }
// fooMain(foo);



// function foo() {
// 	return '123';
// }

// function fooMain(cb) {
// 	console.log(cb());
// }

// fooMain(foo);



// function getData1() {
// 	return y = +prompt('enter', '1');
// }
// function getData20() {
// 	return y = +prompt('enter', '1');
// }

// function summ(cb) {
// 	let x = 10;
// 	console.log(cb() + x);
// }


// summ(getData1);
// summ(getData20);







// function getData2() {
// 	return y = +prompt('enter', '1');
// }

// function getData3() {
// 	return z = +prompt('enter 2', '13');
// }


// function summ() {
// 	let x = 10;
// 	console.log(getData2() + x);
// }

// function summ2() {
// 	let x = 10;
// 	console.log(getData3() + x);
// }


// summ();


//---------------------------------------------------------------



// function foo(x) {
// 	console.log(x + 11);
// }


// function fooMain(cb) {
// 	cb(20);
// }

// fooMain(foo);





// let a = 10;

// function foo(x) {
// 	console.log(x + 11);
// }

// function fooMain(cb) {
// 	cb();
// 	console.log('111');
// }

// // fooMain(foo(a));


// fooMain(
// 	function() {
// 		foo(a);
// 	}
// );


// function hello() {
// 	return 'hello';
// }

// function by() {
// 	return 'by';
// }


// function main (helloCb, byCb, bool) {
// 	if(bool) {
// 		return helloCb();
// 	} 
// 	return byCb();
// }

// console.log(main(hello, by, false));

//-------------------------------------------------
// Написать функцию, которая получает 3 аргумента: 
// два числа и функцию. 
// Произвести вызов переданной функции с двумя аргументами числами.
//  calculate(3, 4, power); 
// Функция должна вернуть 81, как 3 в степени 4.
// Реализовать функции суммирования, деления, умножения.

// const num1 = +prompt('enter num 1','');
// const num2 = +prompt('enter num 2','');
// function summ(a, b) {
// 	return a + b;
// }
// function div(a, b) {
// 	return a / b;
// }
// function minus(a, b) {
// 	return a - b;
// }
// function calculate(x,y,cb) {
// 	return cb(x,y);
// }
// console.log(calculate(num1, num2, summ));
// console.log(calculate(num1, num2, div));
// console.log(calculate(num1, num2, minus));





// Реализовать функцию copy(list) по копированию массива.
// Предусмотреть возможность передачи вторым аргументом функции. 
// При копировании массива - функция применится к каждому элементу
// копируемого массива. 


// function add(value){ 
// 	return value*10;
// }

// function copy(mass,cb) {
// 	let newArray = [];	
// 	for(let i = 0; i < mass.length; i++) {		
// 		if(cb){
// 			newArray.push(cb(mass[i]));
// 		} else {
// 			newArray.push(mass[i]);
// 		}					
// 	}

// 	return newArray;
// }

// const array = [1,2,3,4,5];

// console.log(copy(array));
// console.log(copy(array,add));



//--------------------------------------------------------------

// function foo(x) {
// 	console.log(x);
// 	foo(x+1);
// }

// foo(10);

// debugger;

// function foo(count){
// 	if(count < 10){
// 		console.log(count);
// 		count++;
// 		foo(count);		
// 	}
// }

// foo(0);


// let array = [1,2,3,4];
// function summArray(mass) {
// 	if(mass.length === 1) return mass[0];
// 	return mass.pop() + summArray(mass);
// }
// console.log(summArray(array));


// const array = [1,2,[156,47],[1,2,5,[585,1],47],[55,44,[89,58,[47,4],44],[15,55]]];

// const array = [1,2,[3,4]];

// function foo(){
// 	let summ = 0;
// 	function summArray(mass) {		
// 		for(let i = 0; i < mass.length; i++) {
// 			if(typeof mass[i] === 'object') {
// 				summArray(mass[i]);
// 			} else {
// 				summ += mass[i];
// 			}	
// 		}
// 		return summ;
// 	}
// }

// console.log(summArray(array));

//---------------------------------------------------------------


// let array = [1,2,3,4];
// let arraNew = array.join(', ');
// console.log(arraNew);



// let array = [1,2,3,4];
// let arrayNew = array.slice();
// console.log(arrayNew);

// let array = [1,2,3,4];
// let x = array.push(5,6,78,9);
// console.log(x);


// let array = [1,2,3,4];

// array.forEach(function(x,y){
// 	console.log(y);
// });


// for(let i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }


// let array = [1,2,3,4];
// let newArray = array.map(function(elem,index){
// 	return elem - 10 * 9;
// })
// console.log(newArray);



// let array = [1,2,3,4];
// let arrayNew = array.filter(function(elem){
//  	if(elem % 2 == 0) return elem;
// })
// console.log(arrayNew);



// let array = [1,2,3,4];

// let arrayNew = array.every(function(elem){
// 	return elem < 3;
// });


// console.log(arrayNew);


// let array = [1,2,3,4];
// let arrayNew = array.some(function(elem){
// 	return elem == 1;
// });
// console.log(arrayNew);




let array = [1,2,3,4];
let result = array.reduce(function(buff,elem){
	return buff += elem;
},0);
console.log(result);









































































































