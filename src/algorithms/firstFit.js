const Bin = require('../bin');
const { createFitAlgorithm } = require('../utils');

/**
 * First-fit algorithms.
 *
 * Put the item in the first Bin avalaible.
 * If no space left, create a new Bin.
 *
 * @param  {number} item=0
 * @param  {Bin[]} bins=[]
 * @param  {number} binSize=0
 */
module.exports = createFitAlgorithm((item = 0, bins = [], binSize = 0) => {
  // Try to find the first Bin that can contains the item
  const firstFit = bins.find(b => b.size + item <= binSize);

  // If there isn't enough space left in any Bin, create a new Bin.
  if (firstFit) {
    firstFit.add(item);
  } else {
    bins.push(new Bin([item], item));
  }

  return bins;
});
