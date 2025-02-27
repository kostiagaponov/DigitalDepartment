import Transport from './1'

const owner1 = new Transport.Proprietor(
	'Ivanov',
	'Ivan',
	'Ivanovich',
	new Date('1985-05-01'),
	Transport.documentType.passport,
	1234,
	567890
)

const owner2 = new Transport.Proprietor(
	'Petrov',
	'Petr',
	'Petrovich',
	new Date('1990-06-15'),
	Transport.documentType.passport,
	4321,
	987654
)

const vehicle1 = new Transport.Auto(
	'Toyota',
	'Camry',
	2019,
	1111111,
	12345,
	owner1,
	Transport.bodyType.universal,
	Transport.carClass.c
)

const vehicle2 = new Transport.Auto(
	'BMW',
	'X5',
	2022,
	2222222,
	67890,
	owner2,
	Transport.bodyType.vnedoroj,
	Transport.carClass.f
)

const storage = new Transport.Storage<Transport.Vehiclee>(new Date(), [
	vehicle2,
	vehicle1,
])

const owner = new Transport.Proprietor(
	'Ivanov',
	'Ivan',
	'Ivanovich',
	new Date('1985-05-01'),
	Transport.documentType.passport,
	1234,
	567890
)

const bike = new Transport.MBike(
	'Yamaha',
	'YZF-R6',
	2020,
	123456789,
	987654,
	owner,
	'Aluminum',
	true
)

const bikeJsonInfo = bike.getBikeInfo()
console.log('Информация о мотоцикле в JSON формате:', bikeJsonInfo)

console.log('Все транспортные средства:')
console.log(storage.printArrayT())

const matchingVehicles = storage.getVehiclesByDocumentSeriesStart('12')
console.log('Транспортные средства с совпадением серии документа владельца:')
console.log(matchingVehicles)

console.log('До сортировки:', storage.printArrayT())

storage.sortByOwnerSurname()

console.log('После сортировки:', storage.printArrayT())
