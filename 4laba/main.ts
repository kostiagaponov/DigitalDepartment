import Transport from './1'

const owner1 = new Transport.Proprietor(
	'Дружинина',
	'Злата',
	'Александровна',
	new Date('27-06-2005'),
	Transport.documentType.passport,
	3853,
	49385932
)

const vehicle1 = new Transport.Auto(
	'Mitsubishi',
	'Autlender',
	2023,
	8712083978312939,
	8768749123,
	owner1
)

vehicle1.printVehicle()
owner1.printOwner()
