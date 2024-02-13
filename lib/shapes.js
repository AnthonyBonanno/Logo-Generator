class Shape {
    constructor(shapeColour, text, textColour) {
        this.shapeColour = shapeColour;
        this.text = text;
        this.textColour = textColour;
        this.shape = '';
    }

    renderShape() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <${this.shape} fill=${this.shapeColour} />
        <text style="font-size: 60;" x="50" y="170" fill=${this.textColour}>${this.text}</text></svg>`
    }
}

class Circle extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour)
        
        this.shape = 'circle r="100" cx="100" cy="150"'
    }

}

class Triangle extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour)

        this.shape = 'polygon points="100,0 0,200, 200,200"'
    }
}

class Square extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour)

        this.shape = 'rect width="200" height="200" x="0" y="50"'
    }
}


module.exports = {Shape, Circle, Triangle, Square};