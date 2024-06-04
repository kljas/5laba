"use strict"
let a;

class Employee{
	#name
	#surn

	setName(name){
		this.#name = name;
	}

	setSurn(surn) { 
		this.#surn = surn;
	}

	getName() {
		return this.#name;
	}

	getSurname() {
		return this.#surn;
	}

}

new Employee('Svyatoslav', 'Sokolov');

console.log(user.getName());
console.log(user.getSurname());