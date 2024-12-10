var myNumber = 42;
var isActive = true;
var myString = 'Hello!';
var myArray = [1, 2, 3];
console.log({ myNumber: myNumber, myString: myString, isActive: isActive, myArray: myArray });
var getRemainder = function (a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a % b;
};
var data = {
    id: 6,
    e2: 28,
};
var jsonString = JSON.stringify(data);
console.log('JSON-строка:');
console.log(jsonString);
console.log(getRemainder(10, 3));
console.log(getRemainder(15, 4));
console.log(data.e1);
try {
    console.log(getRemainder(9, 0)); // Попытка деления на 0
}
catch (error) {
    console.error('Ошибка при выполнении getRemainder');
}
