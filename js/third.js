// В этих заданиях НЕЛЬЗЯ использовать встроенные методы

// 1
// Заполнить массив А случайными числами (диазпазон на ваше усмотрение). 
// Заменить каждый элемент массива с четным ИНДЕКСОМ на звездочку *



// let arr = new Array();
// let n =+prompt("Enter n",'100');

// for(let i=0;i<n;i++){
//     arr[i] = Math.floor(Math.random() * (200 - 100) + 100);
//     if(i%2==0 && i !=0){
//         arr[i]= '*';
//     }
    
// }
// console.log(arr);



// 2.
// Создать массив размерностью n
// n принять от пользователя (тут проверку на число можно не делать).
// Заполнить массив значениями с клавиатуры.
// Если введенное значение пользователя не число (см. урок 2), или отрицательное значение, 
// то запросить повторный ввод данных (повторный ввод в ту же ячейку массива). 
// вывести массив в консоль
// в итоговом массиве размерностью n должны быть только положительные числа



// let n =+prompt("Enter n",'100')
// let arr = new Array(n);
// for (let i = 0; i < arr.length; i++) {
//     let input =+prompt('Введите элемент массива', '10');
//     if(isNaN(input) || input<0){
//         input=+prompt('Введите число больше 0', '10');
//     }else {
//         arr[i]=input;
//     }
// }
// console.log(arr);



// 3.
// В двумерном массиве A размером 5 на 10. Заполнить случайными числами.
// Найти ряд, где сумма элементов наименьшая
// Найти ряд, где сумма элементов найбольшая
// Вывод на экран:
// Минимальная сумма чисел Summa в массиве c индексом X
// Максимальная сумма чисел Summa в массиве c индексом Y


// let arr=new Array(5);
// let sum=0;
// let maxSum=0;
// let minSum=0;

// for(let i=0;i<arr.length;i++){
//         arr[i] = new Array(10);
//         }
//         for(let i=0;i<arr.length;i++){
//             sum=0;
//             for (let j = 0; j < arr[i].length; j++) {
//             arr[i][j] = Math.floor(Math.random() * (20 - 1) + 1);  
//             sum +=arr[i][j];    
//         }
//             if (maxSum<sum) maxSum=sum;
//             if (minSum>sum || minSum == 0) minSum=sum; 
//     }   
//         console.log(arr);
//         console.log(maxSum);
//         console.log(minSum);
   

// **********************************************************************
// В этих заданиях МОЖНО использовать встроенные методы

// 4.
// ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December']
// Создать программу, выполняющую вставку элемента в массив (например, свой собственный месяц в году) 
// после элемента (после какого месяца), значение которого укажет пользователь.
// Вывести на экран в виде списка



// let arr= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December'];
// let input = prompt('Введите месяц');
// let change=prompt('Введите ваше значение');
// let index =arr.indexOf(input);
// arr.splice(index+1,0,change);
// arr.forEach(function(item,i,arr){
//     console.log(item);
// })





