"use strict"
let a;

class Employee{
	#name
	#salary
	#age
	setName(name) {
		this.#name = name;
		return this;
	}

	setSalary(salary) {
		this.#salary = salary;
		return this;
	}

	setAge(age) {
		if (age>0 && age<120){
			this.#age = age;
		}else {
			throw new Error("incorrect age");
		}
		return this;
	}

	getName() {
		return this.#name;
	}

	getSalary() {
		return this.#salary + "$";
	}

	getAge() {
		return this.#age;
	}

}

let Svyatoslav = new Employee;
Svyatoslav.setName('Svyatoslav').setSalary(2000000).setAge(20);

console.log(user.getName());
console.log(user.getSalary());
console.log(user.getAge());