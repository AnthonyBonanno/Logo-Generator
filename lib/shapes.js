class Shape {
    constructor(shapeColour, text, textColour) {
        this.shapeColour = shapeColour;
        this.text = text;
        this.textColour = textColour;
    }
}

class Circle extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour)
    }

    renderCircle() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <circle r="45" cx="50" cy="50" fill=${this.shapeColour} />
          <text x="0" y="15" fill=${this.textColour}>${this.text}</text>
        </svg>`
    }
}

class Triangle extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour)

    }

    renderTriangle() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,0 0,100, 200,100" fill=${this.shapeColour} />
          <text x="0" y="15" fill=${this.textColour}>${this.text}</text>
        </svg>`
    }
}

class Square extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour)

    }

    renderSquare() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" x="0" y="0" fill=${this.shapeColour} />
          <text x="0" y="15" fill=${this.textColour}>${this.text}</text>
        </svg>`
    }
}


module.exports = {Shape, Circle, Triangle, Square};