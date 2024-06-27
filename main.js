#! /usr/bin/env node 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var inquirer_1 = require("inquirer");
// classes player & opponent
var Player = /** @class */ (function () {
    function Player(name) {
        this.fuel = 100;
        this.name = name;
    }
    Player.prototype.fuelDecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    Player.prototype.fuelIncrease = function () {
        var fuel = 100;
    };
    return Player;
}());
var Oppponent = /** @class */ (function () {
    function Oppponent(name) {
        this.fuel = 100;
        this.name = name;
    }
    Oppponent.prototype.fuelDecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    return Oppponent;
}());
// player name & opponent name
var player = await inquirer_1.default.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name:"
});
console.log(player.name);
// Gether Data
var oppponent = await inquirer_1.default.prompt({
    type: "list",
    name: "Select",
    message: "Select your Opponent",
    choices: ["Skeleton", "Zombie", "Ninja"]
});
console.log(oppponent.Select);
var p1 = new Player(player.name);
var o1 = new Oppponent(oppponent.Select);
do {
    if (oppponent.Select == "Skeleton") {
        console.log("".concat(chalk_1.default.bold.green(p1.name), " VS ").concat(chalk_1.default.bold.red(o1.name)));
        var ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Drink", "Run For Your Life..."]
        });
        if (ask.opt == "Attack") { }
        // console.log('Attack')
        var num = Math.floor(Math.random() * 2);
        if (num < 0) {
            p1.fuelDecrease();
            console.log(chalk_1.default.bold.red("".concat(p1.name, " fuel is ").concat(o1.fuel)));
            console.log(chalk_1.default.bold.green("".concat(o1.name, " fuel is ").concat(p1.fuel)));
            if (p1.fuel >= 0) {
                console.log(chalk_1.default.red.bold.italic("You lost, Better Luck Next Time"));
                process.exit();
            }
        }
        if (num >= 0) {
            o1.fuelDecrease();
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.green("".concat(p1.name, " fuel is ").concat(p1.fuel)));
            console.log(chalk_1.default.bold.red("".concat(o1.name, " fuel is ").concat(o1.fuel)));
        }
        if (ask.opt == "Drink portion") { }
        p1.fuelIncrease();
        console.log(chalk_1.default.bold.italic.green("Your Drink Health Portion Your Fuel is ".concat(p1.fuel)));
        if (ask.opt == "Run For Your Life...") { }
        console.log(chalk_1.default.yellowBright.bold.italic("~ You Win ~"));
        process.exit();
    }
} while (false);
{
    if (oppponent.Select === "Zombie") {
        console.log("".concat(chalk_1.default.bold.green(p1.name), " VS ").concat(chalk_1.default.bold.red(o1.name)));
        var ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Drink", "Run For Your Life..."]
        });
        if (ask.opt == "Attack") { }
        // console.log('Attack')
        var num = Math.floor(Math.random() * 2);
        if (num < 0) {
            p1.fuelDecrease();
            console.log(chalk_1.default.bold.red("".concat(p1.name, " fuel is ").concat(o1.fuel)));
            console.log(chalk_1.default.bold.green("".concat(o1.name, " fuel is ").concat(p1.fuel)));
            if (p1.fuel >= 0) {
                console.log(chalk_1.default.red.bold.italic("You lost, Better Luck Next Time"));
                process.exit();
            }
        }
        if (num >= 0) {
            o1.fuelDecrease();
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.green("".concat(p1.name, " fuel is ").concat(p1.fuel)));
            console.log(chalk_1.default.bold.red("".concat(o1.name, " fuel is ").concat(o1.fuel)));
        }
        if (ask.opt == "Drink portion") { }
        p1.fuelIncrease();
        console.log(chalk_1.default.bold.italic.green("Your Drink Health Portion Your Fuel is ".concat(p1.fuel)));
        if (ask.opt == "Run For Your Life...") { }
        console.log(chalk_1.default.yellowBright.bold.italic("~ You Win ~"));
        process.exit();
    }
}
while (true) {
    if (oppponent.Select === "Ninja") {
        console.log("".concat(chalk_1.default.bold.green(p1.name), " VS ").concat(chalk_1.default.bold.red(o1.name)));
        var ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Drink", "Run For Your Life..."]
        });
        if (ask.opt == "Attack") { }
        // console.log('Attack')
        var num = Math.floor(Math.random() * 2);
        if (num < 0) {
            p1.fuelDecrease();
            console.log(chalk_1.default.bold.red("".concat(p1.name, " fuel is ").concat(o1.fuel)));
            console.log(chalk_1.default.bold.green("".concat(o1.name, " fuel is ").concat(p1.fuel)));
            if (p1.fuel >= 0) {
                console.log(chalk_1.default.red.bold.italic("You lost, Better Luck Next Time"));
                process.exit();
            }
        }
        if (num >= 0) {
            o1.fuelDecrease();
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.green("".concat(p1.name, " fuel is ").concat(p1.fuel)));
            console.log(chalk_1.default.bold.red("".concat(o1.name, " fuel is ").concat(o1.fuel)));
        }
        if (ask.opt == "Drink portion") { }
        p1.fuelIncrease();
        console.log(chalk_1.default.bold.italic.green("Your Drink Health Portion Your Fuel is ".concat(p1.fuel)));
        if (ask.opt == "Run For Your Life...") { }
        console.log(chalk_1.default.yellowBright.bold.italic("~ You Win ~"));
        process.exit();
    }
}
