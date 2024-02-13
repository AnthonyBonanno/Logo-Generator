const { Circle, Square, Triangle } = require("./shapes");


function generateLogo(answers) {

    if (answers.shape === 'Circle') {
        const circle = new Circle(answers.shapeColour, answers.text, answers.textColour);

        return circle.renderShape();

    } else if (answers.shape === 'Triangle') {
        const triangle = new Triangle(answers.shapeColour, answers.text, answers.textColour);

        return triangle.renderShape();

    } else if (answers.shape === 'Square') {
        const square = new Square(answers.shapeColour, answers.text, answers.textColour);

        return square.renderShape();
    }
}


module.exports = generateLogo;

