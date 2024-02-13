class Shape {
    constructor(shapeColour, text, textColour) {
        this.shapeColour = shapeColour;
        this.text = text;
        this.textColour = textColour;
        this.shape = '';
    }

    renderShape() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"><${this.shape} fill=${this.shapeColour} /><text x="0" y="15" fill=${this.textColour}>${this.text}</text></svg>`
    }
}

class Circle extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour)
        
        this.shape = 'circle r="45" cx="50" cy="50"'
    }

}

class Triangle extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour)

        this.shape = 'polygon points="100,0 0,100, 200,100"'
    }
}

class Square extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour)

        this.shape = 'rect width="100" height="100" x="0" y="0"'
    }
}


module.exports = {Shape, Circle, Triangle, Square};