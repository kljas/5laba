"use strict"
let a;

class Employee{
	#name
	#salary
	#age
	constructor(name, salary, age) {
		this.#name = name;
		this.#salary = salary;
		this.#age = age;
	}

	getName() {
		return this.#name
	}

	getSalary() {
		return this.#salary
	}

	getAge() {
		return this.#age
	}

}

new Employee('Svyatoslav', 'Sokolov');

console.log(user.getName());
console.log(user.getSalary());
console.log(user.getAge());