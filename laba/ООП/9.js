"use strict"

class Employee {
    name = 'Svyatoslav'
    surn = 'Sokolov'
    show(){
        return this.cape(this.name) + this.cape(this.surn)
    }
    
    cape(str) {
        return str[0].toUpperCase();
    }
}

let Svyatoslav_Trismegistus = new Employee;

console.log(Svyatoslav_Trismegistus.name + " " + Svyatoslav_Trismegistus.surn);