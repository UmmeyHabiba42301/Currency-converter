#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("\n \t Welcome to the Habiba currency_converter \n"))

let exchange_rate: any ={
    "USD": 1, // Base currency
    "EUR": 1.15,
    "GBP": 1.25,
    "JPY": 120,
    "CAD": 1.3,
    "PKR": 277.7,
    "NZD": 1.5,
    "AUD": 1.7,
    "CHF": 1.1,
    "SEK": 1.1,
    "SGD": 1.2,
    "HKD": 7.5,
}
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.blueBright("Select the currency to convert from"),
        choices: ["USD", "EUR", "GBP", "JPY","CAD", "PKR", "NZD", "AUD","CAF", "SEK", "SGD", "HKD"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.blueBright("Select the currency to convert to"),
        choices: ["USD", "EUR", "GBP", "JPY","CAD", "PKR", "NZD", "AUD","CAF", "SEK", "SGD", "HKD"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

console.log(`converted_amount: ${chalk.yellow(converted_amount.toFixed(2))}`);