//1
function findMinPositive(arr: number[]): number | null {
	let min: number | null = null

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			if (min === null || arr[i] < min) {
				min = arr[i]
			}
		}
	}

	return min
}
//2
function generateBoolMatrix(strMatrix: string[][]): boolean[][] {
	const result: boolean[][] = []

	for (let i = 0; i < strMatrix.length; i++) {
		const row: boolean[] = []
		for (let j = 0; j < strMatrix[i].length; j++) {
			row.push(strMatrix[i][j].length % 2 !== 0)
		}
		result.push(row)
	}

	return result
}
//3
type NumberTuple = [number, number]
function areSumsEqual(tuple: [number, number]): boolean {
	function sumOfDigits(num: number): number {
		let sum = 0
		while (num > 0) {
			sum += num % 10
			num = Math.floor(num / 10)
		}
		return sum
	}
	const [num1, num2] = tuple
	return sumOfDigits(num1) === sumOfDigits(num2)
}

//4
enum Nitrogen {
	A = 'Аденин',
	U = 'Урацил',
	G = 'Гуанин',
	C = 'Цитозин',
}

//5
class Pet {
	name: string = 'Some pet'
	age: number = -1

	speak(): string {
		return 'No speak. I am fish!'
	}
}

class Dog extends Pet {
	label = 'AngryHunter'
	age = 8

	speak(): string {
		return 'Yaw-Gaw!'
	}
}

class Cat extends Pet {
	name = 'Barsik'
	age = 2

	speak(): string {
		return 'Miyau!'
	}
}

function printPetInfo<T extends Pet>(pet: T): void {
	console.log(`Name: ${pet.name}`)
	console.log(`Age: ${pet.age}`)
	console.log(`Sound: ${pet.speak()}`)
}

//5
interface RNA {
	sequence: Nitrogen
	length: number
	isDoubleStranded: boolean
	name: string
}

const rnaSample: RNA = {
	sequence: Nitrogen.A,
	length: 4,
	isDoubleStranded: false,
	name: 'mRNA',
}

const numbers = [-15, 38, 93, -11, 0, 72]

const stringMatrix: string[][] = [
	['cat', 'awffa', 'aweaaf'],
	['dog', 'gregwe', 'cawgawd'],
]

const tuple: NumberTuple = [123, 132]
const tuple2: NumberTuple = [123, 456]

const dog = new Dog()
const cat = new Cat()

console.log(findMinPositive(numbers))
console.log(generateBoolMatrix(stringMatrix))
console.log(areSumsEqual(tuple))
console.log(areSumsEqual(tuple2))
console.log(Nitrogen.A)

printPetInfo(dog)
printPetInfo(cat)

console.log(JSON.stringify(rnaSample))
