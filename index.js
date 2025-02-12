import inquirer from "inquirer";
let c_Value = {
    PKR: 278.40,
    UAE: 3.67,
    USD: 1,
};
let ans = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "Converting From",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "list",
        name: "to",
        message: "Converting to",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "number",
        name: "amount",
        message: "your amount to convert."
    }
]);
console.log(c_Value[ans.to] / c_Value[ans.from] * ans.amount);
