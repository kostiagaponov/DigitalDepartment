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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
var Transport;
(function (Transport) {
    var documentType;
    (function (documentType) {
        documentType["passport"] = "Passport";
        documentType["studentCard"] = "Student Card";
        documentType["driverLicense"] = "Driver\"s License";
    })(documentType = Transport.documentType || (Transport.documentType = {}));
    var bodyType;
    (function (bodyType) {
        bodyType["cupe"] = "\u041A\u0443\u043F\u0435";
        bodyType["cabriolet"] = "\u041A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442";
        bodyType["vnedoroj"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
        bodyType["universal"] = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B";
    })(bodyType = Transport.bodyType || (Transport.bodyType = {}));
    var carClass;
    (function (carClass) {
        carClass["a"] = "A";
        carClass["b"] = "B";
        carClass["c"] = "C";
        carClass["f"] = "F";
        carClass["s"] = "S";
    })(carClass = Transport.carClass || (Transport.carClass = {}));
    var Seal = function (target) {
        Object.seal(target);
        Object.seal(target.prototype);
    };
    function toUpperCaseDecorator(target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = originalMethod.apply(this, args);
            return result.toUpperCase();
        };
        return descriptor;
    }
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
    var Auto = function () {
        var _classDecorators = [Seal];
        var _classDescriptor;
        var _classExtraInitializers = [];
        var _classThis;
        var _classSuper = Vehiclee;
        var _instanceExtraInitializers = [];
        var _printVehicle_decorators;
        var Auto = _classThis = /** @class */ (function (_super) {
            __extends(Auto_1, _super);
            function Auto_1(marka, model, yearRelease, vinNumber, regNumber, informationOwner, bodyType, carClass) {
                var _this = _super.call(this, marka, model, yearRelease, vinNumber, regNumber, informationOwner) || this;
                _this._bodyType = __runInitializers(_this, _instanceExtraInitializers);
                _this._bodyType = bodyType;
                _this._carClass = carClass;
                return _this;
            }
            Object.defineProperty(Auto_1.prototype, "bodyType", {
                get: function () {
                    return this._bodyType;
                },
                set: function (bodyType) {
                    this._bodyType = bodyType;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Auto_1.prototype, "carClass", {
                get: function () {
                    return this._carClass;
                },
                set: function (carClass) {
                    this._carClass = carClass;
                },
                enumerable: false,
                configurable: true
            });
            Auto_1.prototype.printVehicle = function () {
                _super.prototype.printVehicle.call(this);
                var message = 'Тип Кузова = ' + this._bodyType + ' Класс машины = ' + this._carClass;
                console.log(message);
                return message;
            };
            return Auto_1;
        }(_classSuper));
        __setFunctionName(_classThis, "Auto");
        (function () {
            var _a;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
            _printVehicle_decorators = [toUpperCaseDecorator];
            __esDecorate(_classThis, null, _printVehicle_decorators, { kind: "method", name: "printVehicle", static: false, private: false, access: { has: function (obj) { return "printVehicle" in obj; }, get: function (obj) { return obj.printVehicle; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Auto = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        })();
        return Auto = _classThis;
    }();
    Transport.Auto = Auto;
    var MBike = /** @class */ (function (_super) {
        __extends(MBike, _super);
        function MBike(marka, model, yearRelease, vinNumber, regNumber, owner, frameType, forSport) {
            var _this = _super.call(this, marka, model, yearRelease, vinNumber, regNumber, owner) || this;
            _this._forSport = forSport;
            _this._frameType = frameType;
            return _this;
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
        MBike.prototype.getBikeInfo = function () {
            var bikeInfo = {
                frameType: this._frameType,
                forSport: this._forSport,
            };
            return JSON.stringify(bikeInfo);
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
        Storage.prototype.sortByOwnerSurname = function () {
            this._T.sort(function (a, b) {
                var surnameA = a.informationOwner.surname.toLowerCase();
                var surnameB = b.informationOwner.surname.toLowerCase();
                return surnameA.localeCompare(surnameB);
            });
        };
        Storage.prototype.getVehiclesByDocumentSeriesStart = function (seriesStart) {
            return this._T.filter(function (vehicle) {
                return vehicle.informationOwner.series.toString().startsWith(seriesStart);
            });
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
