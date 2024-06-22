import inquirer from "inquirer";

const marks = await inquirer.prompt(
    [
        {
        name:"maxMarks",
        type:"number",
        message:"enter total max Marks"    
        },
        {
        name:"obtainedMarks",
        type:"number",
        message:"enter total obtained marks"    
        }
    ]
)
const per = marks.maxMarks / marks.obtainedMarks 
const total = per * 100
const result = Math.round
console.log(`${total.toFixed(2)}%`);
