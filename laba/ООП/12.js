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
	openSesame() {
		return this.name + " " + this.salary + " " + this.age;
	}
}

new Employee('Svyatoslav', 'Sokolov');