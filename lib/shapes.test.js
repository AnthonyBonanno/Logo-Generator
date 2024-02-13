// Importing Shape classes
const { Circle, Square, Triangle } = require("./shapes");

// A testing suite for Shape is created.
describe('Shape', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('Circle', () => {
    it('should render a purple circle with red text saying "Hit"', () => {
      const circleOutput = '<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"><circle r="45" cx="50" cy="50" fill=Purple /><text x="0" y="15" fill=Red>Hit</text></svg>';
      const circleTest = new Circle('Purple', 'Hit', 'Red');
      expect(circleTest.renderShape()).toEqual(circleOutput);
    });
  });

  describe('Triangle', () => {
    it('should render a purple circle with red text saying "Hit"', () => {
      const circleOutput = '<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"><circle r="45" cx="50" cy="50" fill=Purple /><text x="0" y="15" fill=Red>Hit</text></svg>';
      const circleTest = new Circle('Purple', 'Hit', 'Red');
      expect(circleTest.renderShape()).toEqual(circleOutput);
    });
  });

  describe('Circle', () => {
    it('should render a purple circle with red text saying "Hit"', () => {
      const circleOutput = '<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"><circle r="45" cx="50" cy="50" fill=Purple /><text x="0" y="15" fill=Red>Hit</text></svg>';
      const circleTest = new Circle('Purple', 'Hit', 'Red');
      expect(circleTest.renderShape()).toEqual(circleOutput);
    });
  });
});
