namespace Transport {
	export enum documentType {
		passport = 'Passport',
		studentCard = 'Student Card',
		driverLicense = 'Driver"s License',
	}

	export enum bodyType {
		cupe = 'Купе',
		cabriolet = 'Кабриолет',
		vnedoroj = 'Внедорожник',
		universal = 'Универсал',
	}

	export enum carClass {
		a = 'A',
		b = 'B',
		c = 'C',
		f = 'F',
		s = 'S',
	}

	interface VehicleStorage<T extends Vehicle> {
		dateCreation: Date
		T: T[]
		printArrayT(): T[]
	}

	interface MotoBike extends Vehicle {
		frameType: string
		forSport: boolean
	}

	interface Car extends Vehicle {
		bodyType: bodyType
		carClass: carClass
	}

	interface Owner {
		surname: string
		name: string
		patronymic: string
		birthday: Date
		documentType: documentType
		series: number
		number: number
		printOwner(): void
	}

	interface Vehicle {
		marka: string
		model: string
		yearRelease: number
		vinNumber: number
		regNumber: number
		printVehicle(): void
		informationOwner: Owner
	}

	export class Proprietor implements Owner {
		_surname: string
		_name: string
		_patronymic: string
		_birthday: Date
		_documentType: documentType
		_series: number
		_number: number

		get surname(): string {
			return this._surname
		}
		set surname(surname: string) {
			this._surname = surname
		}

		get name(): string {
			return this._name
		}
		set name(name: string) {
			this._name = name
		}

		get patronymic(): string {
			return this._patronymic
		}
		set patronymic(patronymic: string) {
			this._patronymic = patronymic
		}

		get birthday(): Date {
			return this._birthday
		}
		set birthday(birthday: Date) {
			this._birthday = birthday
		}

		get documentType(): documentType {
			return this._documentType
		}
		set documentType(documentType: documentType) {
			this._documentType = documentType
		}

		get series(): number {
			return this._series
		}
		set series(series: number) {
			this._series = series
		}

		get number(): number {
			return this._number
		}
		set number(number: number) {
			this._number = number
		}

		constructor(
			surname: string,
			name: string,
			patronymic: string,
			birthday: Date,
			documentType: documentType,
			series: number,
			number: number
		) {
			this._surname = surname
			this._name = name
			this._patronymic = patronymic
			this._birthday = birthday
			this._documentType = documentType
			this._series = series
			this._number = number
		}

		printOwner(): void {
			console.log(
				'Фамилия = ' +
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
					this._number
			)
		}
	}

	export class Vehiclee implements Vehicle {
		private _marka: string
		private _model: string
		private _yearRelease: number
		private _vinNumber: number
		private _registerNumber: number
		private _informationOwner: Owner

		get marka(): string {
			return this._marka
		}
		set marka(marka: string) {
			this._marka = marka
		}

		get model(): string {
			return this._model
		}
		set model(model: string) {
			this._model = model
		}

		get yearRelease(): number {
			return this._yearRelease
		}
		set yearRelease(yearRelease: number) {
			this._yearRelease = yearRelease
		}

		get vinNumber(): number {
			return this._vinNumber
		}
		set vinNumber(vinNumber: number) {
			this._vinNumber = vinNumber
		}

		get regNumber(): number {
			return this._registerNumber
		}
		set regNumber(registerNumber: number) {
			this._registerNumber = registerNumber
		}

		get informationOwner(): Owner {
			return this._informationOwner
		}
		set informationOwner(informationOwner: Owner) {
			this._informationOwner = informationOwner
		}

		constructor(
			marka: string,
			model: string,
			yearRelease: number,
			vinNumber: number,
			regNumber: number,
			informationOwner: Owner
		) {
			this._marka = marka
			this._model = model
			this._yearRelease = yearRelease
			this._vinNumber = vinNumber
			this._registerNumber = regNumber
			this._informationOwner = informationOwner
		}

		printVehicle(): void {
			console.log(
				'Марка = ' +
					this._marka +
					' Модель = ' +
					this._model +
					' Год выпуска = ' +
					this._yearRelease +
					' Вин номер = ' +
					this._vinNumber +
					' Регистрационный номер = ' +
					this._registerNumber
			)
		}
	}

	export class Auto extends Vehiclee implements Car {
		private _bodyType: bodyType
		private _carClass: carClass

		get bodyType(): bodyType {
			return this._bodyType
		}
		set bodyType(bodyType: bodyType) {
			this._bodyType = bodyType
		}

		get carClass(): carClass {
			return this._carClass
		}
		set carClass(carClass: carClass) {
			this._carClass = carClass
		}

		printVehicle(): void {
			super.printVehicle()
			console.log(
				' Тип Кузова = ' + this._bodyType + ' Класс машины = ' + this._carClass
			)
		}
	}

	export class MBike extends Vehiclee implements MotoBike {
		private _frameType: string
		private _forSport: boolean

		get frameType(): string {
			return this._frameType
		}
		set frameType(frameType: string) {
			this._frameType = frameType
		}

		get forSport(): boolean {
			return this._forSport
		}
		set forSport(forSport: boolean) {
			this._forSport = forSport
		}

		printVehicle(): void {
			super.printVehicle()
			console.log(
				' Тип рамы = ' + this._frameType + ' Для транспорта = ' + this._forSport
			)
		}
	}

	export class Storage<T extends Vehiclee> implements VehicleStorage<T> {
		_dateCreation: Date
		_T: T[]

		get dateCreation(): Date {
			return this._dateCreation
		}
		set dateCreation(dateCreation: Date) {
			this._dateCreation = dateCreation
		}

		get T(): T[] {
			return this._T
		}
		set T(T: T[]) {
			this._T = T
		}

		constructor(dateCreation: Date, T: T[]) {
			this._dateCreation = dateCreation
			this._T = T
		}

		printArrayT(): T[] {
			return this.T
		}
	}
}

export default Transport
