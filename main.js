#!/usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "Students",
        message: "Enter student name:",
        type: "input",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        message: "Select the course to enroll",
        type: "list",
        choices: ["MS.Office", "HTML", "Typescript", "Javascript"]
    }
]);
const courseFee = {
    "MS.Office": 15000,
    "HTML": 20000,
    "Typescript": 25000,
    "Javascript": 30000.
};
console.log(`\nCourse Fees: ${courseFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        message: "Please Select payment method",
        type: "list",
        choices: ["Bank Transfer", "Jazzcash", "Easypaisa"]
    },
    {
        name: "amount",
        message: "Transfer Money",
        type: "input",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter non-empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}/-\n`);
const courseFees = courseFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (courseFees === paymentAmount) {
    console.log(` Congratulation, You have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            message: "What would you like to do next?",
            type: "list",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n********status********\n");
        console.log(`Student Name: ${answer.Students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`course fees paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Management System\n");
    }
}
else {
    console.log("Invaild Amount Due to Course\n");
}
