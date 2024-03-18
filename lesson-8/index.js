function fillEvenArray() {
    let evenArray = [];
    for (let i = 2; i <= 100; i += 2) {
        evenArray.push(i);
    }
    return evenArray;
}

let  = fillEvenArray();
console.log(result);

let fractionss = [1.456, 2.125, 3.32, 4.1, 5.34];

let roundedFractionss = fractions.map(number => Math.round(number * 10) / 10);

console.log(roundedFractions);

let fractions = [1.456, 2.125, 3.32, 4.1, 5.34];

let roundedFractions = fractions.map(number => Math.round(number * 10) / 10);

console.log(roundedFractions);

let dateString = '2024-03-01';
let dateParts = dateString.split('-');

let dateObject = {
    год: dateParts[0],
    месяц: dateParts[1],
    день: dateParts[2]
};

console.log(dateObject);

let arrayy = [3, 2, 1];
let resultt = array.map(num => 'больше ' + num).join(', ');

console.log(result);

let input = prompt("Введите массив чисел через запятую:");
let array = input.split(',').map(Number); // преобразование строки в массив чисел

let result = '';

for (let i = 0; i < array.length; i++) {
    result += 'больше ' + array[i];
    if (i !== array.length - 1) {
        result += ', ';
    }
}

console.log(result);

function printTriangle(rows) {
    let stars = '';
    for (let i = 1; i <= rows; i++) {
        stars += '*';
        console.log(stars);
    }
}

printTriangle(7); // Здесь 7 - количество строк в треугольнике