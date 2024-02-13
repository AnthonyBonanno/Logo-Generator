// Importing Shape classes
const { Circle, Square, Triangle } = require("./shapes");

// A testing suite for Shape is created.
describe('Shape', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('Circle', () => {
    it('should render a purple circle with red text saying "Hit"', () => {
      const circleOutput = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <circle r="100" cx="100" cy="150" fill=Purple />
        <text style="font-size: 60;" x="50" y="170" fill=Red>Hit</text></svg>`;
      const circleTest = new Circle('Purple', 'Hit', 'Red');
      expect(circleTest.renderShape()).toEqual(circleOutput);
    });
  });

  describe('Triangle', () => {
    it('should render a yellow triangle with green text saying "Mon"', () => {
      const triangleOutput = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,0 0,200, 200,200" fill=Yellow />
        <text style="font-size: 60;" x="50" y="170" fill=Green>Mon</text></svg>`;
      const triangleTest = new Triangle('Yellow', 'Mon', 'Green');
      expect(triangleTest.renderShape()).toEqual(triangleOutput);
    });
  });

  describe('Square', () => {
    it('should render an orange square with blue text saying "Dog"', () => {
      const squareOutput = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" x="0" y="50" fill=Orange />
        <text style="font-size: 60;" x="50" y="170" fill=Blue>Dog</text></svg>`;
      const squareTest = new Square('Orange', 'Dog', 'Blue');
      expect(squareTest.renderShape()).toEqual(squareOutput);
    });
  });
});
