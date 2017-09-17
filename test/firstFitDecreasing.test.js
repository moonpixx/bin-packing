const { expect } = require('chai');
const firstFitDecreasing = require('../src/algorithms/firstFitDecreasing');
const Bin = require('../src/bin');

describe('First Fit Decreasing', () => {
  it('should handle 163841689525773', () => {
    const input = [1, 6, 3, 8, 4, 1, 6, 8, 9, 5, 2, 5, 7, 7, 3];
    expect(firstFitDecreasing(input, 10)).to.eqls([
      new Bin([9, 1], 10),
      new Bin([8, 2], 10),
      new Bin([8, 1], 9),
      new Bin([7, 3], 10),
      new Bin([7, 3], 10),
      new Bin([6, 4], 10),
      new Bin([6], 6),
      new Bin([5, 5], 10),
    ]);
  });

  it('should handle 14941583257236', () => {
    const input = [1, 4, 9, 4, 1, 5, 8, 3, 2, 5, 7, 2, 3, 6];
    expect(firstFitDecreasing(input, 10)).to.eqls([
      new Bin([9, 1], 10),
      new Bin([8, 2], 10),
      new Bin([7, 3], 10),
      new Bin([6, 4], 10),
      new Bin([5, 5], 10),
      new Bin([4, 3, 2, 1], 10),
    ]);
  });
});
