const { expect } = require('chai');
const bestFit = require('../src/algorithms/bestFit');
const Bin = require('../src/bin');

describe('Best Fit', () => {
  it('should return an empty output if inputs are undefined', () =>
    expect(bestFit()).to.be.empty);

  it('should return an empty output if inputs are empty', () =>
    expect(bestFit([], 0)).to.be.empty);

  it('should return an empty output if bin are too small for an item', () =>
    expect(bestFit([5], 1)).to.be.empty);

  it('should only create one bin for [5, 5]', () => {
    expect(bestFit([5, 5], 10)).to.eqls([new Bin([5, 5], 10)]);
  });

  it('should only create one bin for [5, 5, 5]', () =>
    expect(bestFit([5, 5, 5], 10)).to.eqls([
      new Bin([5, 5], 10),
      new Bin([5], 5),
    ]));

  it('should handle 163841689525773', () => {
    const input = [1, 6, 3, 8, 4, 1, 6, 8, 9, 5, 2, 5, 7, 7, 3];
    expect(bestFit(input, 10)).to.eqls([
      new Bin([1, 6, 3], 10),
      new Bin([8, 1], 9),
      new Bin([4, 6], 10),
      new Bin([8, 2], 10),
      new Bin([9], 9),
      new Bin([5, 5], 10),
      new Bin([7, 3], 10),
      new Bin([7], 7),
    ]);
  });

  it('should handle 14941583257236', () => {
    const input = [1, 4, 9, 4, 1, 5, 8, 3, 2, 5, 7, 2, 3, 6];
    expect(bestFit(input, 10)).to.eqls([
      new Bin([1, 4, 4, 1], 10),
      new Bin([9], 9),
      new Bin([5, 3, 2], 10),
      new Bin([8, 2], 10),
      new Bin([5], 5),
      new Bin([7, 3], 10),
      new Bin([6], 6),
    ]);
  });
});
