"use strict"

class Employee {
    show(){
        return this.cape(this.name) + this.cape(this.surn)
    }
    
    cape(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}

let Svyatoslav_Trismegistus = new Employee;

Svyatoslav_Trismegistus.name = 'Svyatoslav'
Svyatoslav_Trismegistus.surn = 'Sokolov';

console.log(Svyatoslav_Trismegistus.show('Svyatoslav', '12092'));