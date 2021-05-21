const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const manager = () => {
    console.log(`
    ___________________________/
   |          My Team          |
   |___________________________|

    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'What is the name of your manager? (Required)',
            validate: managerInput =>{
                if (managerInput){
                    return true;
                }else{
                    console.log('You need to enter the name of your manager!');
                    return false;
                }
            }   
           },
           {
            type: 'input',
            name: 'email',
            message: 'What is the email of your manager? (Required)',
            validate: emailInput =>{
                if (emailInput){
                    return true;
                }else{
                    console.log('You need to enter the email of your manager!');
                    return false;
                }
            }   
           },
           {
            type: 'input',
            name: 'office',
            message: "What is the number of your manager's office? (Required)",
            validate: officeInput =>{
                if (officeInput){
                    return true;
                }else{
                    console.log('You need to enter the number of the office!');
                    return false;
                }
            }   
           },
           {
            type: 'input',
            name: 'id',
            message: 'What is the ID number of your manager? (Required)',
            validate: idInput =>{
                if (idInput){
                    return true;
                }else{
                    console.log('You need to enter the ID of your manager!');
                    return false;
                }
            }   
           }
        
    ]);
  

};

const addEmployee = employeesData => {
    if(!employeesData.list){
        employeesData.list = [];
    }
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Would you like to add another employee?',
            default: false
        },
        {
            type: 'list',
            name: 'employeeChoice',
            message: "Chose your new employee's role.",
            choices: ['Engineer', 'Intern', 'Finish'],
            default: 'Finish',
            when: ({confirmEmployee}) => confirmEmployee,
            validate: employeeChoice => {
                if(employeeChoice){
                     return true;
                }else{
                    console.log('You have to chose an option.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employee',
            message: 'Enter the name of your employee.',
            validate: employeeInput => {
                if(employeeInput){
                    return true;
                }else{
                    console.log('You have to enter the name of your employee');
                    return false;
                }
            },
            when: ({confirmEmployee}) => confirmEmployee
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the ID number of your employee.',
            validate: idInput => {
                if(idInput){
                    return true;
                }else{
                    console.log('You have to enter the ID of your employee');
                    return false;
                }
            },
            when: ({confirmEmployee}) => confirmEmployee
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email of your employee.',
            validate: emailInput => {
                if(emailInput){
                    return true;
                }else{
                    console.log('You have to enter the email of your employee');
                    return false;
                }
            },
            when: ({confirmEmployee}) => confirmEmployee
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the github of your employee.',
            validate: githubInput => {
                if(githubInput){
                    return true;
                }else{
                    console.log('You have to enter the github of your employee');
                    return false;
                }
            },
            when: (answers) => answers.employeeChoice === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the school of your employee.',
            validate: schoolInput => {
                if(schoolInput){
                    return true;
                }else{
                    console.log('You have to enter the school of your employee');
                    return false;
                }
            },
            when: (answers) => answers.employeeChoice === 'Intern'
        }
    ]).then (employee => {
        if(employee.employeeChoice === 'Engineer'){
           let newEmployee = new Engineer (employee.employee, employee.email,employee.id,employee.github);
           employeesData.list.push(newEmployee);
            if(employee.confirmEmployee){
            return addEmployee(employeesData);
            } else{
                return employeesData;
                
            }
        }
        else if(employee.employeeChoice === 'Intern'){
           let newEmployee = new Intern (employee.employee, employee.email, employee.id, employee.school);
           employeesData.list.push(newEmployee);
           if(employee.confirmEmployee){
           return addEmployee(employeesData);
           } else{
               return employeesData;
               
           }
       }
       else {return employeesData;}
      
    });
};


const init = () =>{
manager()
.then(addEmployee)
.then(employeesData => {
    console.log(employeesData);
})
}

init();