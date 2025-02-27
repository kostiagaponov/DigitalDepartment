"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1_1 = require("./1");
var owner1 = new _1_1.default.Proprietor('Ivanov', 'Ivan', 'Ivanovich', new Date('1985-05-01'), _1_1.default.documentType.passport, 1234, 567890);
var owner2 = new _1_1.default.Proprietor('Petrov', 'Petr', 'Petrovich', new Date('1990-06-15'), _1_1.default.documentType.passport, 4321, 987654);
var vehicle1 = new _1_1.default.Auto('Toyota', 'Camry', 2019, 1111111, 12345, owner1, _1_1.default.bodyType.universal, _1_1.default.carClass.c);
var vehicle2 = new _1_1.default.Auto('BMW', 'X5', 2022, 2222222, 67890, owner2, _1_1.default.bodyType.vnedoroj, _1_1.default.carClass.f);
var storage = new _1_1.default.Storage(new Date(), [
    vehicle2,
    vehicle1,
]);
var owner = new _1_1.default.Proprietor('Ivanov', 'Ivan', 'Ivanovich', new Date('1985-05-01'), _1_1.default.documentType.passport, 1234, 567890);
var bike = new _1_1.default.MBike('Yamaha', 'YZF-R6', 2020, 123456789, 987654, owner, 'Aluminum', true);
var bikeJsonInfo = bike.getBikeInfo();
console.log('Информация о мотоцикле в JSON формате:', bikeJsonInfo);
console.log('Все транспортные средства:');
console.log(storage.printArrayT());
var matchingVehicles = storage.getVehiclesByDocumentSeriesStart('12');
console.log('Транспортные средства с совпадением серии документа владельца:');
console.log(matchingVehicles);
console.log('До сортировки:', storage.printArrayT());
storage.sortByOwnerSurname();
console.log('После сортировки:', storage.printArrayT());
