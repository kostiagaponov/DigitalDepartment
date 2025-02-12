"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1_1 = require("./1");
var owner1 = new _1_1.default.Proprietor('Дружинина', 'Злата', 'Александровна', new Date('27-06-2005'), _1_1.default.documentType.passport, 3853, 49385932);
var vehicle1 = new _1_1.default.Auto('Mitsubishi', 'Autlender', 2023, 8712083978312939, 8768749123, owner1);
vehicle1.printVehicle();
owner1.printOwner();
