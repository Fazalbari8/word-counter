#! /usr/bin/env node
import inquirer from "inquirer"
const answers:{
    Sentences:string
} = await inquirer.prompt([
    {
        name:"Sentences",
        type:"input",
        message:"Enter your word to count a Sentences"
    }
])
const words = answers.Sentences.trim().split(" ")

console.log(words);


console.log(`Your sentence word count is ${words.length}`);
