enum Documenttt {
	passv = 'Passport',
	sved = 'Svedetelstvo',
}

enum bdType {
	hch = 'Хэчбэк',
	cbr = 'Кабриолет',
	Cupe = 'Купе',
	Liv = 'Лифтбэк',
}

enum cllCar {
	a = 'A',
	b = 'B',
	c = 'C',
	d = 'D',
}

interface Owner {
	name: string
	surname: string
	patronymic: string
	dateBirth: Date
	document: Documenttt
	series: number
	number: number
	printOwner(): void
}

interface Vehicle {
	marka: string
	model: string
	year: Date
	vin: number
	regNumber: string
	owner: Owner
	printVehicle(): void
}

interface Car extends Transport {
	bodyType: bdType
	classCar: cllCar
}

interface MotoBike extends Transport {
	ramaType: string
	forSport: boolean
}

interface VehicleStorage<T extends Vehicle> {
	storageData: Date
	T: T[]
	printT(): T[]
}

class VStorageClass<T extends Vehicle> implements VehicleStorage<T> {
	_storageData: Date
	get storageData(): Date {
		return this._storageData
	}
	set storageData(storageData: Date) {
		this._storageData = storageData
	}

	_T: T[]
	get T(): T[] {
		return this._T
	}
	set T(T: T[]) {
		this._T = T
	}

	constructor(storageData: Date, T: T[]) {
		this._storageData = storageData
		this._T = T
	}

	public printT(): T[] {
		return this._T
	}
}

class People implements Owner {
	_name: string
	get name(): string {
		return this._name
	}
	set name(name: string) {
		this._name = name
	}

	_surname: string
	get surname(): string {
		return this._surname
	}
	set surname(surname: string) {
		this._surname = surname
	}

	_patronymic: string
	get patronymic(): string {
		return this._patronymic
	}
	set patronymic(patronymic: string) {
		this._patronymic = patronymic
	}

	_dateBirth: Date
	get dateBirth(): Date {
		return this._dateBirth
	}
	set dateBirth(dateBirth: Date) {
		this._dateBirth = dateBirth
	}

	_document: Documenttt
	get document(): Documenttt {
		return this._document
	}
	set document(document: Documenttt) {
		this._document = document
	}

	_series: number
	get series(): number {
		return this._series
	}
	set series(series: number) {
		this._series = series
	}

	_number: number
	get number(): number {
		return this._number
	}
	set number(number: number) {
		this._number = number
	}

	constructor(
		name: string,
		surname: string,
		patronymic: string,
		dateBirth: Date,
		document: Documenttt,
		series: number,
		number: number
	) {
		this._name = name
		this._surname = surname
		this._patronymic = patronymic
		this._dateBirth = dateBirth
		this._document = document
		this._series = series
		this._number = number
	}

	public printOwner(): void {
		console.log(
			'Марка = ' +
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
				this._number
		)
	}
}

class Transport implements Vehicle {
	private _marka: string
	get marka(): string {
		return this._marka
	}
	set marka(marka: string) {
		this._marka = marka
	}

	private _model: string
	get model(): string {
		return this._model
	}
	set model(model: string) {
		this._model = model
	}

	private _year: Date
	get year(): Date {
		return this._year
	}
	set year(year: Date) {
		this._year = year
	}

	private _vin: number
	get vin(): number {
		return this._vin
	}
	set vin(vin: number) {
		this._vin = vin
	}

	private _regNumber: string
	get regNumber(): string {
		return this._regNumber
	}
	set regNumber(regNumber: string) {
		this._regNumber = regNumber
	}

	private _owner: Owner
	get owner(): Owner {
		return this._owner
	}
	set owner(owner: Owner) {
		this._owner = owner
	}

	constructor(
		marka: string,
		model: string,
		year: Date,
		vin: number,
		regNumber: string,
		owner: Owner
	) {
		this._marka = marka
		this._model = model
		this._year = year
		this._vin = vin
		this._regNumber = regNumber
		this._owner = owner
	}

	public printVehicle(): void {
		console.log(
			'Марка = ' +
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
				this._owner
		)
	}
}

class Auto extends Transport implements Car {
	_bodyType: bdType
	get bodyType(): bdType {
		return this._bodyType
	}
	set bodyType(bodyType: bdType) {
		this._bodyType = bodyType
	}

	_classCar: cllCar
	get classCar(): cllCar {
		return this._classCar
	}
	set classCar(classCar: cllCar) {
		this._classCar = classCar
	}

	constructor(
		marka: string,
		model: string,
		year: Date,
		vin: number,
		regNumber: string,
		owner: Owner,
		bodyType: bdType,
		classCar: cllCar
	) {
		super(marka, model, year, vin, regNumber, owner)
		this._bodyType = bodyType
		this._classCar = classCar
	}

	public printVehicle(): void {
		super.printVehicle()
		console.log(
			'Тип кузова = ' + this._bodyType + 'Класс машины = ' + this._classCar
		)
	}
}

class Moto extends Transport implements MotoBike {
	_ramaType: string
	get ramaType(): string {
		return this._ramaType
	}
	set ramaType(ramaType: string) {
		this._ramaType = ramaType
	}

	_forSport: boolean
	get forSport(): boolean {
		return this._forSport
	}
	set forSport(forSport: boolean) {
		this._forSport = forSport
	}

	constructor(
		marka: string,
		model: string,
		year: Date,
		vin: number,
		regNumber: string,
		owner: Owner,
		ramaType: string,
		forSport: boolean
	) {
		super(marka, model, year, vin, regNumber, owner)
		this._ramaType = ramaType
		this._forSport = forSport
	}

	public printVehicle(): void {
		super.printVehicle()
		console.log(
			'Тип кузова = ' + this._ramaType + 'Класс машины = ' + this._forSport
		)
	}
}

const own1 = new People(
	'Гаврилов',
	'Иван',
	'Алексеевич',
	new Date('0-0-0'),
	Documenttt.passv,
	85,
	99999
)

const veh1 = new Transport(
	'Lada',
	'huracane',
	new Date('0-0-0'),
	219897283,
	'pedropedro',
	own1
)
