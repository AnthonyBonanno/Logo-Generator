// Constructor Shape is imported.
const Shape = require('../lib/shapes');

// A testing suite for Shape is created.
describe('Shape', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('sum', () => {
    it('should take two numbers and add them together', () => {
      const total = 4;
      const arithmetic = new Shape();
      expect(arithmetic.sum(2, 2)).toEqual(total);
    });
  });
});
