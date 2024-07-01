#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            message: "What do you want to add in your todo's?",
            type: "input"
        },
        {
            name: "addMore",
            message: "Do you want to add more?",
            type: "confirm",
            default: false
        }
    ]);
    todos.push(addTask.todo);
    if (addTask.addMore == false) {
        condition = false;
    }
    console.log(todos);
}
