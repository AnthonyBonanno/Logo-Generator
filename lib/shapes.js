function renderShape(shape) {

}

function renderShapeColour(shapeColour) {

}

class Shape {
    constructor(shapeColour, text, textColour) {
        this.shape = '';
        this.shapeColour = shapeColour;
        this.text = text;
        this.textColour = textColour;

        
    }

    renderSVG() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <${this.shape} r="45" cx="50" cy="50" fill=${this.shapeColour} />
          <text x="0" y="15" fill=${this.textColour}>${this.text}</text>
        </svg>`
    }
}

class Circle extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour)
        
    }
    
    renderCircle() {
        return ``
    }
}

class Triangle extends Shape {

}

class Square extends Shape {

}

// let testShape = new Shape('Circle', rgb(205, 92, 92), 'tex', rgb(233, 150, 122))

module.exports = {Shape, Circle, Triangle, Square};