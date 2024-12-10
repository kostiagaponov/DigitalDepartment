var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1
function findMinPositive(arr) {
    var min = null;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            if (min === null || arr[i] < min) {
                min = arr[i];
            }
        }
    }
    return min;
}
//2
function generateBoolMatrix(strMatrix) {
    var result = [];
    for (var i = 0; i < strMatrix.length; i++) {
        var row = [];
        for (var j = 0; j < strMatrix[i].length; j++) {
            row.push(strMatrix[i][j].length % 2 !== 0);
        }
        result.push(row);
    }
    return result;
}
function areSumsEqual(tuple) {
    function sumOfDigits(num) {
        var sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    var num1 = tuple[0], num2 = tuple[1];
    return sumOfDigits(num1) === sumOfDigits(num2);
}
//4
var Nitrogen;
(function (Nitrogen) {
    Nitrogen["A"] = "\u0410\u0434\u0435\u043D\u0438\u043D";
    Nitrogen["U"] = "\u0423\u0440\u0430\u0446\u0438\u043B";
    Nitrogen["G"] = "\u0413\u0443\u0430\u043D\u0438\u043D";
    Nitrogen["C"] = "\u0426\u0438\u0442\u043E\u0437\u0438\u043D";
})(Nitrogen || (Nitrogen = {}));
//5
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return 'No speak. I am fish!';
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = 'AngryHunter';
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return 'Yaw-Gaw!';
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return 'Miyau!';
    };
    return Cat;
}(Pet));
function printPetInfo(pet) {
    console.log("Name: ".concat(pet.name));
    console.log("Age: ".concat(pet.age));
    console.log("Sound: ".concat(pet.speak()));
}
var rnaSample = {
    sequence: Nitrogen.A,
    length: 4,
    isDoubleStranded: false,
    name: 'mRNA',
};
var numbers = [-15, 38, 93, -11, 0, 72];
var stringMatrix = [
    ['cat', 'awffa', 'aweaaf'],
    ['dog', 'gregwe', 'cawgawd'],
];
var tuple = [123, 132];
var tuple2 = [123, 456];
var dog = new Dog();
var cat = new Cat();
console.log(findMinPositive(numbers));
console.log(generateBoolMatrix(stringMatrix));
console.log(areSumsEqual(tuple));
console.log(areSumsEqual(tuple2));
console.log(Nitrogen.A);
printPetInfo(dog);
printPetInfo(cat);
console.log(JSON.stringify(rnaSample));
