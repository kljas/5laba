"use strict"
let a;

class Employee{
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	showName() {
		return this.name;
	}
	showMeTheMoney() {
		return this.salary;
	}
	theSpiceMustFlow() {
		a = this.salary/10
		this.salary = this.salary + a;
	}
}

new Employee('Svyatoslav', 'Sokolov');