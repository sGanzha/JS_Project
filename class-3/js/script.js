// console.log(Math.round(20.4));
// console.log(Math.ceil(20.1));
// console.log(Math.floor(20.9));
// console.log(Math.random());

// const userName2 = 'Petja2';
// const userAge2 = 23;
// const userEmail2 = 'test@ig.ua';

// const userEmail2 = 'test@ig.ua';




// const userName = 'Petja';
// const userAge = 18;
// const userEmail = 'test@i.ua';

// const array = ['Petja', 18, 'test@i.ua', true, '000'];
// console.log(array.length);
// array[5] = 'string';
// console.log(array.length);
// array.length = 3;
// console.log(array);
// console.log(array);
// 
// console.log(array[array.length]);
// console.log(array[0]);
// console.log(array[2]);
// console.log(array[4]);
// console.log(array[array.length - 1])

// array[array.length] = '112332123';
// console.log(array);
// array[array.length] = 'rrrrrr';
// console.log(array);

// const mass = [10];
// const mass2 = new Array(10);

// console.log(mass);
// console.log(mass2);


// let a = 10;
// let b = a;
// a = 20;

// console.log(a)	;
// console.log(b)	;


// let array = [1,2,3,4];
// let array2 = array;
// array[array.length] = '5';

// console.log(array)	;
// console.log(array2)	;



// let array = ['Ura', 'Petja', 'Tanja', 'Ivan'];


// for(let i = 0; i < array.length; i++) {
//  console.log(array[i])	;
// }


// for(let i = array.length - 1; i >= 0; i--) {
//  console.log(array[i]);
// }


// console.log(Math.floor(Math.random() * (100 - 10) + 10));


// let mass = [];
// mass.length = 30;
// Заполните массив случайными числами в диапазоне от 10 до 100

// let mass = [];
// mass.length = 30;

// for(let i = 0; i < mass.length; i++) {
// 	mass[i] = Math.floor(Math.random() * (200 - 100) + 100);
// }

// console.log(mass);



// Дан массив с элементами [5, 8, 3, 45, 5]. 
// Используя цикл for, найдите сумму элементов этого массива. 
// Запишите ее в переменную result.



// const array = [5, 8, 3, 45, 5];
// let result = 0;

// for(let i = 0; i < array.length; i++){
//    result += array[i];
// }

// console.log(result);




// Создайте массив array с элементами 2, 4, 9, 7. 
// Умножьте первый элемент массива на второй, второй на третий, 
// а третий элемент на четвертый…. 
// Результаты сложите, присвойте переменной result. 
// Выведите на экран значение result.

// const array = [2, 4, 9, 7];
// let result = 0;

// for(let i = 0; i < array.length - 1; i++) {
//    result += array[i] * array[i + 1];
//    // console.log(result);
// }

// console.log(result);



// Заполните массив случайными числами в диапазоне от 0 до 100
// Найдите минимальное и максимальное число в массиве
// результат вывести в консоль


// let mass = new Array(5);

// for(let i = 0; i < mass.length; i++) {
// 	mass[i] = Math.floor(Math.random() * (100 - 0) + 0);
// }

// console.log(mass);


// let min = mass[0]; 
// let max = mass[0];

// for (let i = 0; i < mass.length; i++) {
// 	if(min > mass[i]) min = mass[i];
// 	if(max < mass[i]) max = mass[i];
// }

// console.log('min', min);
// console.log('max', max);



// В массиве произвести такую замену: 
// 1 элемент поменять с 2 
// 3 элемент поменять с 4
// 5 элемент поменять с 6 и тд 
// Если массив непарный - последний элемент не трогать.
// было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5


// const array = [1,2,3,4,5,6];
// let memory;

// for (let i = 0; i < array.length - 1; i++) {
// 	if(i % 2 == 0) {
// 	    memory = array[i];
// 	    array[i] = array[i+1];
// 	    array[i+1] = memory;
// 	}
// }

// console.log(array);



// const array = [[1,2,3],
//                [4,5,6],
//                [7,8,9]];



// let Ukraine = ["Киев", "Харьков", "Львов", "Днепропетровск"];
// let Spain =   ["Мадрид", "Барселона", "Валенсия", "Севилья"];
// let Poland =  ["Варшава", "Краков", "Гданьск"];

// const mass = [Ukraine,Spain,Poland];
// console.log(mass[1][2]);


//-----------------------------------------------------
// Создайте многомерный массив 10*10
// Наполните случайными значениями от 10 до 100
//Math.floor(Math.random() * (100 - 0) + 0)


// let array = new Array(10);

// for(let i = 0; i < array.length; i++) {
// 	array[i] = new Array(array.length);
// }

// for(let i = 0; i < array.length; i++) {
// 	for (let j = 0; j < array[i].length; j++) {
//         array[i][j] = Math.floor(Math.random() * (100 - 0) + 0);
// 	}
// }

// console.log(array);

//----------------------------------------------
// 7.
// Создайте многомерный массив
// Циклом заполните его таким образом:

// 00 01 02 03 04
// 10 11 12 13 14
// 20 21 22 23 24
// 30 31 32 33 34
// 40 41 42 43 44


// let array = new Array(10);

// for(let i = 0; i < array.length; i++) {
// 	array[i] = new Array(array.length);
// }


// for(let i = 0; i < array.length; i++) {
// 	for(let k = 0; k < array[i].length; k++) {
// 		// if(i == k) {
//   //          document.write(' **');
// 		// } else {
// 		// 	document.write(' ' + i + k);
// 		// }

// 		if(i == k || i + k == array.length - 1) {
// 			document.write(' **');
// 		}else {
// 			document.write(' ' + i + k);
// 		}

// 		// document.write(' ' + i + k);
		
// 	}
// 	document.write('<br>');
// }

// Создать многомерный массив, размер массива получить от пользователя. 
// Каждый нечётный подмассив заполнить значением 'odd', 
// а чётный — 'even'
// Размер каждого вложенного массива - 3.

// let array = new Array(+prompt('Enter num array','10'));

// for(let i = 0; i < array.length; i++) {
// 	array[i] = new Array(3);
// 	for(let j = 0; j < array[i].length; j++){
// 	    if(i % 2 == 0) {
//            array[i][j] = 'even';
// 	    }  else {
//             array[i][j] = 'odd';
// 	    }
// 	}
// }

// console.log(array);

///-------------------------------------------------
// let x = '1, 2, 3, 4, 5, 6, 7, 8';
// console.log(x);
// let array = x.split(', ');
// console.log(array);

///-------------------------------------------------
// let cars = ['audi', 'bmw', 'kia', 'saab'];
// let str = cars.join(' | ');
// console.log(str);

///-------------------------------------------------

// let cars = ['audi', 'bmw', 'kia', 'saab'];
// let cars2 = ['audi2', 'bmw2', 'kia2', 'saab2'];
// let cars3 = ['audi3', 'bmw3', 'kia3', 'saab3'];
// let car4 = 'saab50'

// let carsNew = cars.concat(cars2, cars3, car4);

// console.log(carsNew);


///-------------------------------------------------

// let cars = ['audi', 'bmw', 'kia', 'saab'];

// let carsR = cars.reverse();

// console.log(cars);
// console.log(carsR);


///-------------------------------------------------

// let cars = ['audi', 'bmw', 'kia', 'saab'];
// let carsSlice = cars.slice();
// console.log(carsSlice);



///-------------------------------------------------

// let cars = ['audi', 'bmw', 'kia', 'saab'];

// let x = cars.push('mers','lada');

// console.log(cars);
// console.log(x);

///-------------------------------------------------

// let cars = ['audi', 'bmw', 'kia', 'saab'];

// let x = cars.pop();

// console.log(cars);
// console.log(x);

///-------------------------------------------------
// let cars = ['audi', 'bmw', 'kia', 'saab'];
// let x = cars.unshift('mers');
// console.log(cars);
// console.log(x);

///-------------------------------------------------
// let cars = ['audi', 'bmw', 'kia', 'saab'];

// let x = cars.shift();
// console.log(cars);
// console.log(x);


///-------------------------------------------------


// let cars = ['audi', 'bmw', 'kia', 'saab'];

// let arr = cars.splice(1, 3, 'lada' ,'mers', 'reno');
// console.log(cars);
// console.log(arr);









