#! /usr/bin/env node 
import chalk from "chalk";
import inquirer from "inquirer";

// classes player & opponent
class Player {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        let fuel = 100
    }
}
class Oppponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}
// player name & opponent name
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name:"
})

console.log(player.name)
// Gether Data
let oppponent = await inquirer.prompt({
    type: "list",
    name:"Select",
    message: "Select your Opponent",
    choices: ["Skeleton", "Zombie", "Ninja"]
})
console.log(oppponent.Select)
let p1 = new Player(player.name)
let o1 = new Oppponent(oppponent.Select)

do {
    if(oppponent.Select == "Skeleton"){
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Drink", "Run For Your Life..."]
        })
        if(ask.opt == "Attack"){}
            // console.log('Attack')
            let num = Math.floor (Math.random() * 2)
        if (num < 0) {
            p1.fuelDecrease() 
            console.log(chalk.bold.red(`${p1.name} fuel is ${o1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${p1.fuel}`))
            if (p1.fuel >= 0) {
                console.log(chalk.red.bold.italic("You lost, Better Luck Next Time"))
                process.exit()
            }
        }
        if (num >= 0 ) {
          o1.fuelDecrease()
          p1.fuelIncrease() 
          console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
          console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
        }
        
        if(ask.opt == "Drink portion"){}
         p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`Your Drink Health Portion Your Fuel is ${p1.fuel}`))
         
           
         if(ask.opt == "Run For Your Life..."){}
            console.log(chalk.yellowBright.bold.italic("~ You Win ~"))
            process.exit()
}
}
while (false) { 
    if(oppponent.Select === "Zombie") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Drink", "Run For Your Life..."]
        })
        if(ask.opt == "Attack"){}
            // console.log('Attack')
            let num = Math.floor (Math.random() * 2)
        if (num < 0) {
            p1.fuelDecrease() 
            console.log(chalk.bold.red(`${p1.name} fuel is ${o1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${p1.fuel}`))
            if (p1.fuel >= 0) {
                console.log(chalk.red.bold.italic("You lost, Better Luck Next Time"))
                process.exit()
            }
        }
        if (num >= 0 ) {
          o1.fuelDecrease()
          p1.fuelIncrease() 
          console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
          console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
        }
        
        if(ask.opt == "Drink portion"){}
         p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`Your Drink Health Portion Your Fuel is ${p1.fuel}`))
         
           
         if(ask.opt == "Run For Your Life..."){}
            console.log(chalk.yellowBright.bold.italic("~ You Win ~"))
            process.exit()
    }
}
while(true) {
    if(oppponent.Select === "Ninja") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Drink", "Run For Your Life..."]
        })
        if(ask.opt == "Attack"){}
            // console.log('Attack')
            let num = Math.floor (Math.random() * 2)
        if (num < 0) {
            p1.fuelDecrease() 
            console.log(chalk.bold.red(`${p1.name} fuel is ${o1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${p1.fuel}`))
            if (p1.fuel >= 0) {
                console.log(chalk.red.bold.italic("You lost, Better Luck Next Time"))
                process.exit()
            }
        }
        if (num >= 0 ) {
          o1.fuelDecrease()
          p1.fuelIncrease() 
          console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
          console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
        }
        
        if(ask.opt == "Drink portion"){}
         p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`Your Drink Health Portion Your Fuel is ${p1.fuel}`))
         
           
         if(ask.opt == "Run For Your Life..."){}
            console.log(chalk.yellowBright.bold.italic("~ You Win ~"))
            process.exit()
    }
}