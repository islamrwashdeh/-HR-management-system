// 'use-strict';

// var employees = [];

// function Employee(empID, fullName, department, level, image, salary) {
//         this.empID = empID,
//         this.fullName = fullName,
//         this.department = department,
//         this.level = level,
//         this.image = image,
//         this.salary = salary
// }

// Employee.prototype.calculateNetSalary = function () {

//     let salary;

//     if (this.level == "Senior") {
//         salary = getRandomNumberBetween(1500, 2000);
//     }
//     else if (this.level == "Junior") {
//         salary = getRandomNumberBetween(500, 1000);
//     }
//     else {
//         salary = getRandomNumberBetween(1000, 1500);
//     }

//     this.salary = salary;
//     this.netSalary = salary - (salary * (7.5 / 100));
// }

// Employee.prototype.render = function () {

//     // get the members container
//     let members = document.getElementById('members-container');

//     // create a card for the employee
//     let card = document.createElement("div");
//     card.classList.add("team-member");

//     // add profile-pic for the employee
//     let imgElement = document.createElement("img");
//     imgElement.classList.add("profile-pic");
//     imgElement.setAttribute("src", this.image);

//     card.appendChild(imgElement);

//     // create employee's info container
//     let empInfo = document.createElement("div");
//     empInfo.classList.add("info");

//     // create info elements
//     let id = document.createElement("p");
//     let name = document.createElement("p");
//     let department = document.createElement("p");
//     let level = document.createElement("p");
//     let salary = document.createElement("p");

//     id.innerHTML = "ID: " + this.empID;
//     name.innerHTML = "Name: " + this.fullName;
//     department.innerHTML = "Department: " + this.department;
//     level.innerHTML = "Level: " + this.level;
//     salary.innerHTML = "Salary: " + this.salary;

//     empInfo.appendChild(id);
//     empInfo.appendChild(name);
//     empInfo.appendChild(department);
//     empInfo.appendChild(level);
//     empInfo.appendChild(salary);

//     card.appendChild(empInfo);

//     members.appendChild(card);
// }

// document.getElementById('submit-btn').addEventListener("click", function () {

//     let full_name = document.getElementById('name');
//     let department = document.getElementById('department');
//     let level = document.getElementById('level');
//     let image = document.getElementById('image');

//     if(full_name.value == ""){
//         alert("Name is required!");
//         return;
//     }

//     let empId = getUniqueRandomID();
//     let newEmp = new Employee(empId, full_name.value, department.value,level.value,image.value );
//     newEmp.calculateNetSalary();

//     saveEmployee(newEmp);

//     renderFromStorage();

// });

// function getRandomNumberBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function getUniqueRandomID() {

//     let id = getRandomNumberBetween(1000, 9999);

//     for (let i = 0; i < employees.length; i++) {
//         if (employees[i].empID == id) {
//             id = getRandomNumberBetween(1000, 9999);
//             i = 0;
//         }
//     }

//     return id;
// }

// function saveEmployee(emp){
    
//     var getEmployees = localStorage.getItem('Employees')

//     if(getEmployees != null){
//         employees = JSON.parse(getEmployees);
//         employees.push(emp);

//         let myEmployees = JSON.stringify(employees);
//         localStorage.setItem("Employees", myEmployees);
//     }

// }

// function renderFromStorage(){

//     let generatedEmps = [];

//     var getJson = localStorage.getItem('Employees')

//     if(getJson != null){
//         generatedEmps = JSON.parse(getJson);
//         for(let i = 0; i < generatedEmps.length; i++){

//             let emp = new Employee(
//                 generatedEmps[i].empID,
//                 generatedEmps[i].fullName,
//                 generatedEmps[i].department,
//                 generatedEmps[i].level,
//                 generatedEmps[i].image,
//                 generatedEmps[i].salary
//             );

//             emp.render();
//         }
//     }
//     else{
//         // this code will excute just once in browser life, to render default employees
//         let myEmps = JSON.stringify(employees);
//         localStorage.setItem("Employees", myEmps);
//         renderFromStorage();
//     }
// }

// // default employees
// let lana = new Employee(1002, "Lana Ali", "Finance","Senior", "pic/em2.png");
// let tamara = new Employee(1003, "Tamara Ayoub", "Marketing","Senior", "pic/em3.jpg:Zone.Identifier");
// let omar = new Employee(1005, "Omar Zaid", "Development","Senior", "pic/emp4.png");
// let rana = new Employee(1006, "Rana Saleh", "Development","Junior", "pic/emp1.jpg:Zone.Identifier");
// let hadi = new Employee(1007, "Hadi Ahmad", "Finance","Mid-Senior", "pic/emp6.png");


// lana.calculateNetSalary();
// tamara.calculateNetSalary();
// rana.calculateNetSalary();
// hadi.calculateNetSalary();
// omar.calculateNetSalary();



// employees.push(lana);
// employees.push(tamara);
// employees.push(rana);
// employees.push(hadi);
// employees.push(omar);



// renderFromStorage();


// //  manipulation
// let displayForm = false;
// document.getElementById("add-btn").addEventListener("click", function(){

//     let form = document.getElementById('new-emp-form');
//     if(displayForm){
//         form.style.display = "none";
//         this.innerHTML = "Add New Employee";
//         this.style.backgroundColor = "#072227";
//         displayForm = false;
//     }
//     else{
//         form.style.display = "inline-block";
//         this.innerHTML = "Cancel";
//         this.style.backgroundColor = "red";
//         displayForm = true;
//     }
    
// }); 

'use-strict';

var employees = [];

function Employee(empID, fullName, department, level, image, salary) {
        this.empID = empID,
        this.fullName = fullName,
        this.department = department,
        this.level = level,
        this.image = image,
        this.salary = salary
}

Employee.prototype.calculateNetSalary = function () {

    let salary;

    if (this.level == "Senior") {
        salary = getRandomNumberBetween(1500, 2000);
    }
    else if (this.level == "Junior") {
        salary = getRandomNumberBetween(500, 1000);
    }
    else {
        salary = getRandomNumberBetween(1000, 1500);
    }

    this.salary = salary;
    this.netSalary = salary - (salary * (7.5 / 100));
}

Employee.prototype.render = function () {

    // get the members container
    let members = document.getElementById('members-container');

    // create a card for the employee
    let card = document.createElement("div");
    card.classList.add("team-member");

    // add profile-pic for the employee
    let imgElement = document.createElement("img");
    imgElement.classList.add("profile-pic");
    imgElement.setAttribute("src", this.image);

    card.appendChild(imgElement);

    // create employee's info container
    let empInfo = document.createElement("div");
    empInfo.classList.add("info");

    // create info elements
    let id = document.createElement("p");
    let name = document.createElement("p");
    let department = document.createElement("p");
    let level = document.createElement("p");
    let salary = document.createElement("p");

    id.innerHTML = "ID: " + this.empID;
    name.innerHTML = "Name: " + this.fullName;
    department.innerHTML = "Department: " + this.department;
    level.innerHTML = "Level: " + this.level;
    salary.innerHTML = "Salary: " + this.salary;

    empInfo.appendChild(id);
    empInfo.appendChild(name);
    empInfo.appendChild(department);
    empInfo.appendChild(level);
    empInfo.appendChild(salary);

    card.appendChild(empInfo);

    members.appendChild(card);
}

document.getElementById('submit-btn').addEventListener("click", function () {

    let full_name = document.getElementById('name');
    let department = document.getElementById('department');
    let level = document.getElementById('level');
    let image = document.getElementById('image');

    if(full_name.value == ""){
        alert("Name is required!");
        return;
    }

    let empId = getUniqueRandomID();
    let newEmp = new Employee(empId, full_name.value, department.value,level.value,image.value );
    newEmp.calculateNetSalary();

    saveEmployee(newEmp);

    renderFromStorage();

});

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getUniqueRandomID() {

    let id = getRandomNumberBetween(1000, 9999);

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].empID == id) {
            id = getRandomNumberBetween(1000, 9999);
            i = 0;
        }
    }

    return id;
}

function saveEmployee(emp){
    
    var getEmployees = localStorage.getItem('Employees')

    if(getEmployees != null){
        employees = JSON.parse(getEmployees);
        employees.push(emp);

        let myEmployees = JSON.stringify(employees);
        localStorage.setItem("Employees", myEmployees);
    }

}

function renderFromStorage(){

    let generatedEmps = [];

    var getJson = localStorage.getItem('Employees')

    if(getJson != null){
        generatedEmps = JSON.parse(getJson);
        for(let i = 0; i < generatedEmps.length; i++){

            let emp = new Employee(
                generatedEmps[i].empID,
                generatedEmps[i].fullName,
                generatedEmps[i].department,
                generatedEmps[i].level,
                generatedEmps[i].image,
                generatedEmps[i].salary
            );

            emp.render();
        }
    }
    else{
        // this code will excute just once in browser life, to render default employees
        let myEmps = JSON.stringify(employees);
        localStorage.setItem("Employees", myEmps);
        renderFromStorage();
    }
}

// default employees
let lana = new Employee(1002, "Lana Ali", "Finance","Senior", "assets/Lana.png");
let tamara = new Employee(1003, "Tamara Ayoub", "Marketing","Senior", "assets/Tamara.png");
let omar = new Employee(1005, "Omar Zaid", "Development","Senior", "assets/Omar.png");
let rana = new Employee(1006, "Rana Saleh", "Development","Junior", "assets/Rana.png");
let hadi = new Employee(1007, "Hadi Ahmad", "Finance","Mid-Senior", "assets/Hadi.png");


lana.calculateNetSalary();
tamara.calculateNetSalary();
rana.calculateNetSalary();
hadi.calculateNetSalary();
omar.calculateNetSalary();



employees.push(lana);
employees.push(tamara);
employees.push(rana);
employees.push(hadi);
employees.push(omar);



renderFromStorage();


//  manipulation
let displayForm = false;
document.getElementById("add-btn").addEventListener("click", function(){

    let form = document.getElementById('new-emp-form');
    if(displayForm){
        form.style.display = "none";
        this.innerHTML = "Add New Employee";
        this.style.backgroundColor = "#072227";
        displayForm = false;
    }
    else{
        form.style.display = "inline-block";
        this.innerHTML = "Cancel";
        this.style.backgroundColor = "red";
        displayForm = true;
    }
    
}); 
