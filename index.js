const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'q1',
        message: "What three letters would you like to use? (Ex: PDX)",
    },
    {
        type: 'input',
        name: 'q2',
        message: "What color would you like this text?"
    },
    {
        type: 'list',
        name: 'q3',
        message: "Choose Shape:",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: 'input',
        name: 'q4',
        message: "What color would you like this shape?"
    },
]

function generateLogo() {
    inquirer.prompt(questions).then(answers => {
        const letters = answers.q1.toUpperCase();
        const textColor = answers.q2;
        const shapeType = answers.q3
        const shapeColor = answers.q4;

        //Generate code based on userInput: 
        let logoSVG = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">`;


        switch (shapeType) {
            case "Circle":
                const circle = new Circle();
                circle.setColor(shapeColor);
                logoSVG += circle.render();
                logoSVG += `<text x="150" y="150" text-anchor="middle" fill="${textColor}">${letters} </text>`;
                break;
            case "Triangle":
                const triangle = new Triangle();
                triangle.setColor(shapeColor);
                logoSVG += triangle.render();
                logoSVG += `<text x="150" y="150" text-anchor="middle" fill="${textColor}">${letters} </text>`;
                break;
            case "Square":
                const square = new Square();
                square.setColor(shapeColor);
                logoSVG += square.render();
                logoSVG += `<text x="150" y="150" text-anchor="middle" fill="${textColor}">${letters} </text>`;
                break;

        }

        logoSVG += '</svg>'

        //adding style might help to render??? 

        // logoSVG = logoSVG.replace ('<svg', `<svg xmlns="http://www.w3.org/2000/svg">
        //  <style>
        // <![CDATA[
        //    text {
        //     dominant-baseline: hanging;
        //      font: 28px Verdana, Helvetica, Arial, sans-serif;
        //   }
        //  ]]>
        //   </style>`
        //  );

        //Save the code to logo.svg
        console.log(logoSVG);
        fs.writeFile('logo.svg', logoSVG, (err) => {
            if (err) {
                console.error("Error saving logo:", err);
            } else {
                console.log("Logo saved as 'logo.svg'");
            }
        })

    })



}
generateLogo();