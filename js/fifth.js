// 1. (callback)
// Напишите функцию filterArray, которая принимает callback функцию и массив. 
// Возвращает массив значений, для которых callback вернет true.
// let  input = [1, 2, 3, 4, 5, 6];
// function isEven(x) { return x % 2 != 0; }
// console.log(filterArray(input, isEven)); 



// let  input = [1, 2, 3, 4, 5, 6];
// function isEven(x) { return x % 2 != 0; }

// function filterArray(array,cb){
//     let arr =[];
//     let x;
//     for (let i = 0; i < array.length; i++) {
//         x=array[i];
//         cb(x);
//         if (cb(x)==true){
//             arr.push(array[i]);
//     }
// }
//     return arr;
// }

// console.log(filterArray(input, isEven)); 






// 2. (рекурсия)
// Написать функция factorial(n) - которая при помощи рекурсии будет считать значение факториала числа n!
// Предусмотреть return 'error' в случае если функция вызывается с числом меньше нуля включительно

// n=+prompt('Введите число', '10');

// function factorial(n){
//     if (n <=0){
//         return 'error';
//     } else if (n !=1) {
//         return n*factorial(n-1);
//     } else return 1;
// }

// console.log(factorial(n));




// 3.(рекурсия)
// Сделайте функцию inArray('hello', ['helloo', hello', 'hihi']), которая определяет, 
// есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором ищем. 
// Функция должна вернуть true или false. 
// вам поможет метод splice)

// function inArray(word, array){

//     return;
// }



// console.log(inArray('hello', ['helloo', 'hello', 'hihi']));