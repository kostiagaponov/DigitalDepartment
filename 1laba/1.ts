const myNumber: number = 42
const isActive: boolean = true
let myString: string = 'Hello!'
let myArray: number[] = [1, 2, 3]

console.log({ myNumber, myString, isActive, myArray })

const getRemainder = (a: number, b: number): number => {
	if (b === 0) {
		throw new Error('Division by zero is not allowed')
	}
	return a % b
}

interface Entity {
	id: number
}

interface ToJsonStringify extends Entity {
	e1?: number
	e2?: number
}

const data: ToJsonStringify = {
	id: 6,
	e2: 28,
}

const jsonString: String = JSON.stringify(data)
console.log('JSON-строка:')
console.log(jsonString)
console.log(getRemainder(10, 3))
console.log(getRemainder(15, 4))
console.log(data.e1)
try {
	console.log(getRemainder(9, 0)) // Попытка деления на 0
} catch (error) {
	console.error('Ошибка при выполнении getRemainder')
}
