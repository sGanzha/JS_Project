// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);


// const a = false;
// const b = false;
// const c = false;


// console.log(a || b || c);




// при преобразовании в булевый тип дают false
// ''
// 0
// null
// undefined
// NaN



// const a = '';
// const b = 0;
// const c = false;
// const d = 0;


// console.log(a || b || c || d);


//-----------------------------------


// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);




// const a = true;
// const b = false;
// const c = 5;
// const d = "string";
// const e = null;
// const f = "0";

// console.log(a && b);
// console.log(c && d);
// console.log(c && e);
// console.log(f && c);
// console.log(b && f);
// console.log(e && b);




// const a = true;
// const b = false;
// const c = false;
// const res = a || b && c; 
// const res = (a || b) && c; 

// console.log(res);


// const x = null || 2 && 3 || 4 && 0 || 1;
// console.log(x);

//--------------------------------------------------
// const age = +prompt('Enter age', '18');
// const h = +prompt('Enter h', '180');

// if(age >= 18 && h > 180) {
// 	console.log('входите');
// }

// console.log('код после условной конструкции');

// if('0') {
// 	console.log('входите');
// }

// const student = confirm('Вы студент?');
// console.log(student);
// if(student) {
// 	console.log('if');
// } else {
// 	console.log('else');
// }

// const a = 10;
// const b = 20;

// if(a > b || a == 10) {
// 	console.log('ok');
// } else {
// 	console.log('no');
// }


// Если переменная «a» больше 2-х и меньше 11-ти, 
// или переменная b больше или равна 6-ти и меньше 14-ти,
// то выведите 'Верно', в противном случае 
// выведите 'Неверно'.

// const a = 10;
// const b = 20;

// if(a > 2 && a < 11 || b >= 6 && b <= 14) {
// 	console.log('Верно');
// } else {
// 	console.log('Неверно');
// }


// if(false) {

// } else if(false) {

// } else {

// }


// Автомат по продаже газированной воды
// 1 стакан стоит 10 грн
// Пользователь вводит количество стаканов и вносит деньги.

// Посчитать, сколько сдачи мы должны отдать пользователю и вывести сообщение:
// «Благодарим за Ваш заказ. Ваша сдача Х грн».

// Если внесено денег меньше, чем общая стоимость газировки, выдать сообщение
// «Недостаточно средств, необходимо доплатить Х грн».

// Если внесенная сумма равная общей стоимости напитка, вывести сообщение
// «Спасибо, что без сдачи».


// const PRICE_GLASS = 10;
// const glass = +prompt('количество стаканов','1');
// const money = +prompt('внесите средства','10');
// const summa = PRICE_GLASS * glass;
// let result;

// if(summa < money) {
// 	result = money - summa;
// 	console.log('Благодарим за Ваш заказ. Ваша сдача ' + result + 'грн');
// } else if (money < summa) {
// 	result = summa - money;
// 	console.log('Недостаточно средств, необходимо доплатить ' + result + 'грн');
// } else {
// 	console.log('Спасибо, что без сдачи');
// }



// const notebook = prompt("Какая модель ноутбука Вас интересует?");

// if (notebook === "asus") {
//     console.log("ноутбук " + notebook + " есть а наличии");
// }
// else if (notebook === "dell") {
//     console.log("ноутбук " + notebook + " есть а наличии");
// }
// else if (notebook === "sony") {      
//     console.log("ноутбук " + notebook + " есть а наличии");
// }
// else if (notebook === "lenovo") {    
//     console.log("ноутбук " + notebook + " есть а наличии");
// }
// else {
//     console.log("указанный Вами товар не найден.");
// };


// const notebook = +prompt("Какая модель ноутбука Вас интересует?");

// switch (notebook) {
// 	case 1:
// 		console.log("ноутбук " + notebook + " есть а наличии");
// 		break;
// 	case 2:
// 		console.log("ноутбук " + notebook + " есть а наличии");		
// 		break;
// 	case 3:
// 		console.log("ноутбук " + notebook + " есть а наличии");		
// 		break;
// 	case 4:
// 		console.log("ноутбук " + notebook + " есть а наличии");		
// 		break;	
// 	default:
// 		console.log("такого товара нет");				
// }





// const notebook = +prompt("Какая модель ноутбука Вас интересует?");

// switch (notebook) {
// 	case 1:
// 	case 2:
// 	case 3:
// 		console.log("ДА");
// 		break;
// 	case 4:
// 		console.log("ноутбук " + notebook + " есть а наличии");		
// 		break;	
// 	default:
// 		console.log("такого товара нет");				
// }




// Переменная season может принимать 4 значения: 1, 2, 3 или 4. 
// Если значение 1, то в переменную result запишем 'зима', 
// если имеет значение '2' — 'весна' и так далее. 
// Решите задачу через switch-case.

// const season = 3;
// let re = 2;
// switch (season) {
// 	case 1:
// 		re = 'зима';
// 		break;
// 	case 2:	
// 		re = 'весна';
// 		break;
// 	case 3:
// 		re = 'лето';
// 		break;
// 	case 4:	
// 		re = 'осень';
// 		break;
// 	default:
// 		re = 'нет такого сезона'
// }

// console.log(re);


//---------------------------------------------------

// Условие ? виражение1 : виражение2


// const x = 10;
// const y = 20;

// if(x < y) {
// 	console.log('1');
// } else {
// 	console.log('2');
// }

// (x < y) ? console.log('1') : console.log('2');



//---------------------------------------------------

// let a = 0;
// debugger;
// while (a < 5) {
// 	console.log(a);	
// 	a = a + 1;	
// }

// let c = 0;

// while (c < 5) {
// 	if(c === 2) {
// 		console.log('c = 2');
// 	} else {
// 		console.log(c);
// 	}
// 	c = c + 1;
// }





// let count = 0;

// while (true) {
// 	console.log(count);
// 	if (count == 3) {
// 		break;
// 	}
// 	count = count + 1;
////	count++;
// }

// let x = 0;
// while (x < 10) {
// 	x = x + 1;
// 	console.log(x);
// 	continue;
// 	console.log('этот код не будет выведен никогда');
// }

// инкремен ++
// декремент --

// let count = 10;
// console.log(count);	// 10
// console.log(count++);	//10  постфиксная инкремен
// console.log(count);	// 11


// let count = 10;
// console.log(count);	// 10
// console.log(++count);	//11  префиксная инкремен
// console.log(count);	// 11



// let count = 10;
// console.log(count);	// 10
// console.log(count--);	//10  постфиксная декремент
// console.log(count);	// 9


// let count = 10;
// console.log(count);	// 10
// console.log(--count);	//9  префиксная декремент
// console.log(count);	// 9

//--------------------------------------------------
// Используя цикл while
// Выведите числа в промежутке от 10 до 60.

// let x = 10;
// while(x <= 60) {
// 	console.log(x);
// 	x++;
// }

//---------------------------------------------------------------

// let x = 10;

// do {
// 	x--;
// 	console.log(x);
// } while(x > 0);


//-------------------------------------
// let a;
// do{
// 	a = +prompt('Введите число');
// 	if(isNaN(a)) {
// 		alert('Вы ввели не число');
// 	}
// }	while(isNaN(a));
//-------------------------------------


// let a;

// do{
// 	a = prompt('Введите число');
// 	console.log(a);
// } while(a != null);


//-------------------------------------



// for(начальные условия;условия выхода;шаг итерации) {
// 	тело цикла
// }

// let x = 10;
// while(x <= 15) {
// 	console.log(x);
// 	x++;
// }
// console.log('х после цикла', x);

// for(let i = 0;i < 10;i++) {
// 	console.log(i);
// }

// for(let i = 0;i < 10;i++) {
// 	console.log(i);
// }

// console.log('i после цикла', i);



// if (true) {
// 	let x  = 10;
// 	console.log(x);
// }

// console.log(x);



// Определить какое из трех, введенных пользователем, чисел 
// максимальное и вывести его на экран.


// const a = +prompt('Выведите первое число');
// const b = +prompt('Выведите второе число');
// const c = +prompt('Выведите третье число');

// if((a > b) && (a > c)) {
// 	console.log('максимальное число' + a);
// } else if (b > c) {
// 	console.log('максимальное число' + b);
// } else {
// 	console.log('максимальное число' + c);
// }


//------------------------------------------------
// Написать скрипт возведения числа A в степень B.

// const x = +prompt('Выведите число');
// const num = +prompt('Выведите степень');
// let result = 1; 

// for(let i = 1; i <= num; i++) {
// 	// result = result * x;
// 	result *= x;
// }

// console.log(result);


//------------------------------------------------
//Посчитать факториал n!, где n - ввести с клавиатуры.

// const n = +prompt('Выведите факториал');
// let result = 1;

// for(let i = 1; i <= n; i++){
// 	// console.log('i', i);
// 	// console.log('result', result);
// 	result = i * result;
// }
// console.log('result', result);


//----------------------------------------------------
// вести с клавиатуры 2 числа a и b (где a < b). 
// Запустить цикл перебора от a до b. 
// Вывести в консоль квадраты чётных чисел.


// const a = +prompt('Выведите число 1');
// const b = +prompt('Выведите число 2');


// for(let i = a; i <= b; i++) {
// 	if(i % 2 == 0) {
// 		console.log(i*i);
// 	}
// }

//----------------------------------------------------
// Вывести на экран таблицу умножения от 1 до 9. 

document.write('<table border="1">');
for(let i = 1;i <= 9; i++){
	document.write('<tr>');
	for(let j = 2;j <= 9; j++) {
		document.write('<td>' + j + ' * ' + i + ' = ' + i*j + '</td>');
	}
	document.write('</tr>');
}
document.write('</table>');


// for(let i = 0;i < 5; i++){
// 	console.log('ojjjjjjjjjjjjjjj');
// 	for(let j = 0;j < 5; j++) {
// 		console.log(j);
// 	}
// }








































































































































