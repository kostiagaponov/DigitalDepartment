var Documenttt;
(function (Documenttt) {
    Documenttt["passv"] = "Passport";
    Documenttt["sved"] = "Svedetelstvo";
})(Documenttt || (Documenttt = {}));
var People = /** @class */ (function () {
    function People(name, surname, patronymic, dateBirth, document, series, number) {
        this._name = name;
        this._surname = surname;
        this._patronymic = patronymic;
        this._dateBirth = dateBirth;
        this._document = document;
        this._series = series;
        this._number = number;
    }
    Object.defineProperty(People.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (surname) {
            this._surname = surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People.prototype, "patronymic", {
        get: function () {
            return this._patronymic;
        },
        set: function (patronymic) {
            this._patronymic = patronymic;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People.prototype, "dateBirth", {
        get: function () {
            return this._dateBirth;
        },
        set: function (dateBirth) {
            this._dateBirth = dateBirth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People.prototype, "document", {
        get: function () {
            return this._document;
        },
        set: function (document) {
            this._document = document;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People.prototype, "series", {
        get: function () {
            return this._series;
        },
        set: function (series) {
            this._series = series;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People.prototype, "number", {
        get: function () {
            return this._number;
        },
        set: function (number) {
            this._number = number;
        },
        enumerable: false,
        configurable: true
    });
    People.prototype.printOwner = function () {
        console.log('Марка = ' +
            this._name +
            ' Модель = ' +
            this._surname +
            ' Год выпуска = ' +
            this._patronymic +
            ' Вин номер = ' +
            this._dateBirth +
            ' Регистрационный номер = ' +
            this._series +
            ' Его владелец = ' +
            this._number);
    };
    return People;
}());
var Transport = /** @class */ (function () {
    function Transport(marka, model, year, vin, regNumber, owner) {
        this._marka = marka;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._regNumber = regNumber;
        this._owner = owner;
    }
    Object.defineProperty(Transport.prototype, "marka", {
        get: function () {
            return this._marka;
        },
        set: function (marka) {
            this._marka = marka;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transport.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (model) {
            this._model = model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transport.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (year) {
            this._year = year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transport.prototype, "vin", {
        get: function () {
            return this._vin;
        },
        set: function (vin) {
            this._vin = vin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transport.prototype, "regNumber", {
        get: function () {
            return this._regNumber;
        },
        set: function (regNumber) {
            this._regNumber = regNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transport.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (owner) {
            this._owner = owner;
        },
        enumerable: false,
        configurable: true
    });
    Transport.prototype.printVehicle = function () {
        console.log('Марка = ' +
            this._marka +
            ' Модель = ' +
            this._model +
            ' Год выпуска = ' +
            this._year +
            ' Вин номер = ' +
            this._vin +
            ' Регистрационный номер = ' +
            this._regNumber +
            ' Его владелец = ' +
            this._owner);
    };
    return Transport;
}());
