#! usr/bin/env node
import inquirer from "inquirer";
//list of tasks
//addition of tasks
//viewing tasks
//push() = adds an eleement to the list
//pop() = removes last elemetn from the list
//concat([]) = makes a new list by adding another list
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todos",
            message: "What do you wanna add in todos?",
            type: "input"
        },
        {
            name: "addmore",
            message: "Do you really want to add more TODO list?",
            type: "confirm",
            default: "false"
        },
    ]);
    todos.push(addTask.todos);
    condition = addTask.addmore;
    console.log(todos);
}
