"use strict"
class Employee {
    show(){
        console.log(this.name+' '+this.salary)
    }
}
let Svyatoslav_Trismegistus = new Employee;

Svyatoslav_Trismegistus.name = 'Svyatoslav'
Svyatoslav_Trismegistus.age = '20'
Svyatoslav_Trismegistus.salary = 12092348923479083247932846982347019374923864982370923872398470397496982183097498326489174;

console.log(Svyatoslav_Trismegistus.show('Svyatoslav', '12092348923479083247932846982347019374923864982370923872398470397496982183097498326489174'));