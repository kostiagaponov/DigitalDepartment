"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var documentType;
(function (documentType) {
    documentType["passport"] = "Passport";
    documentType["studentCard"] = "Student Card";
    documentType["driverLicense"] = "Driver\"s License";
})(documentType || (documentType = {}));
var bodyType;
(function (bodyType) {
    bodyType["cupe"] = "\u041A\u0443\u043F\u0435";
    bodyType["cabriolet"] = "\u041A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442";
    bodyType["vnedoroj"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    bodyType["universal"] = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B";
})(bodyType || (bodyType = {}));
var carClass;
(function (carClass) {
    carClass["a"] = "A";
    carClass["b"] = "B";
    carClass["c"] = "C";
    carClass["f"] = "F";
    carClass["s"] = "S";
})(carClass || (carClass = {}));
var Transport;
(function (Transport) {
    var Proprietor = /** @class */ (function () {
        function Proprietor(surname, name, patronymic, birthday, documentType, series, number) {
            this._surname = surname;
            this._name = name;
            this._patronymic = patronymic;
            this._birthday = birthday;
            this._documentType = documentType;
            this._series = series;
            this._number = number;
        }
        Object.defineProperty(Proprietor.prototype, "surname", {
            get: function () {
                return this._surname;
            },
            set: function (surname) {
                this._surname = surname;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Proprietor.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (name) {
                this._name = name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Proprietor.prototype, "patronymic", {
            get: function () {
                return this._patronymic;
            },
            set: function (patronymic) {
                this._patronymic = patronymic;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Proprietor.prototype, "birthday", {
            get: function () {
                return this._birthday;
            },
            set: function (birthday) {
                this._birthday = birthday;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Proprietor.prototype, "documentType", {
            get: function () {
                return this._documentType;
            },
            set: function (documentType) {
                this._documentType = documentType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Proprietor.prototype, "series", {
            get: function () {
                return this._series;
            },
            set: function (series) {
                this._series = series;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Proprietor.prototype, "number", {
            get: function () {
                return this._number;
            },
            set: function (number) {
                this._number = number;
            },
            enumerable: false,
            configurable: true
        });
        Proprietor.prototype.printOwner = function () {
            console.log('Фамилия = ' +
                this._surname +
                ' Имя = ' +
                this._name +
                ' Отчество = ' +
                this._patronymic +
                ' Дата рождения = ' +
                this._birthday +
                ' Документ = ' +
                this._documentType +
                ' Серия = ' +
                this._series +
                ' Номер = ' +
                this._number);
        };
        return Proprietor;
    }());
    Transport.Proprietor = Proprietor;
    var Vehiclee = /** @class */ (function () {
        function Vehiclee(marka, model, yearRelease, vinNumber, regNumber, informationOwner) {
            this._marka = marka;
            this._model = model;
            this._yearRelease = yearRelease;
            this._vinNumber = vinNumber;
            this._registerNumber = regNumber;
            this._informationOwner = informationOwner;
        }
        Object.defineProperty(Vehiclee.prototype, "marka", {
            get: function () {
                return this._marka;
            },
            set: function (marka) {
                this._marka = marka;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehiclee.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (model) {
                this._model = model;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehiclee.prototype, "yearRelease", {
            get: function () {
                return this._yearRelease;
            },
            set: function (yearRelease) {
                this._yearRelease = yearRelease;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehiclee.prototype, "vinNumber", {
            get: function () {
                return this._vinNumber;
            },
            set: function (vinNumber) {
                this._vinNumber = vinNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehiclee.prototype, "regNumber", {
            get: function () {
                return this._registerNumber;
            },
            set: function (registerNumber) {
                this._registerNumber = registerNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehiclee.prototype, "informationOwner", {
            get: function () {
                return this._informationOwner;
            },
            set: function (informationOwner) {
                this._informationOwner = informationOwner;
            },
            enumerable: false,
            configurable: true
        });
        Vehiclee.prototype.printVehicle = function () {
            console.log('Марка = ' +
                this._marka +
                ' Модель = ' +
                this._model +
                ' Год выпуска = ' +
                this._yearRelease +
                ' Вин номер = ' +
                this._vinNumber +
                ' Регистрационный номер = ' +
                this._registerNumber);
        };
        return Vehiclee;
    }());
    Transport.Vehiclee = Vehiclee;
    var Auto = /** @class */ (function (_super) {
        __extends(Auto, _super);
        function Auto() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Auto.prototype, "bodyType", {
            get: function () {
                return this._bodyType;
            },
            set: function (bodyType) {
                this._bodyType = bodyType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Auto.prototype, "carClass", {
            get: function () {
                return this._carClass;
            },
            set: function (carClass) {
                this._carClass = carClass;
            },
            enumerable: false,
            configurable: true
        });
        Auto.prototype.printVehicle = function () {
            _super.prototype.printVehicle.call(this);
            console.log(' Тип Кузова = ' + this._bodyType + ' Класс машины = ' + this._carClass);
        };
        return Auto;
    }(Vehiclee));
    Transport.Auto = Auto;
    var MBike = /** @class */ (function (_super) {
        __extends(MBike, _super);
        function MBike() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(MBike.prototype, "frameType", {
            get: function () {
                return this._frameType;
            },
            set: function (frameType) {
                this._frameType = frameType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MBike.prototype, "forSport", {
            get: function () {
                return this._forSport;
            },
            set: function (forSport) {
                this._forSport = forSport;
            },
            enumerable: false,
            configurable: true
        });
        MBike.prototype.printVehicle = function () {
            _super.prototype.printVehicle.call(this);
            console.log(' Тип рамы = ' + this._frameType + ' Для транспорта = ' + this._forSport);
        };
        return MBike;
    }(Vehiclee));
    Transport.MBike = MBike;
    var Storage = /** @class */ (function () {
        function Storage(dateCreation, T) {
            this._dateCreation = dateCreation;
            this._T = T;
        }
        Object.defineProperty(Storage.prototype, "dateCreation", {
            get: function () {
                return this._dateCreation;
            },
            set: function (dateCreation) {
                this._dateCreation = dateCreation;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Storage.prototype, "T", {
            get: function () {
                return this._T;
            },
            set: function (T) {
                this._T = T;
            },
            enumerable: false,
            configurable: true
        });
        Storage.prototype.printArrayT = function () {
            return this.T;
        };
        return Storage;
    }());
    Transport.Storage = Storage;
    function getCurrentDate() {
        console.log(new Date().toLocaleTimeString());
    }
    Transport.getCurrentDate = getCurrentDate;
    function startTimer() {
        var interval = 5000;
        var duration = 60000;
        var startTime = Date.now();
        var timer = setInterval(function () {
            var elapsed = Date.now() - startTime;
            if (elapsed >= duration) {
                clearInterval(timer);
            }
            else {
                getCurrentDate();
            }
        }, interval);
    }
    Transport.startTimer = startTimer;
    function createLogger(message) {
        return function () { return console.log(message); };
    }
    Transport.createLogger = createLogger;
})(Transport || (Transport = {}));
exports.default = Transport;
