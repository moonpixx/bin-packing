const Bin = require('../bin');
const { createFitAlgorithm } = require('../utils');

/**
 * Best-fit algorithms.
 *
 * Try to put the item in the best Bin avalaible.
 * If no space left, create a new Bin.
 *
 * @param  {number} item=0
 * @param  {Bin[]} bins=[]
 * @param  {number} binSize=0
 */
module.exports = createFitAlgorithm((item = 0, bins = [], binSize = 0) => {
  // Try to find the best Bin: the one that will be filled the most.
  const bestBin = bins.reduce(
    (accBestFit, currItem) => {
      if (currItem.size + item <= binSize && currItem.size + item > accBestFit.max) {
        return {
          max: currItem.size + item,
          bestFit: currItem,
        };
      }
      return accBestFit;
    },
    { max: 0, bestFit: null },
  ).bestFit;

  // If there isn't enough space left in any Bin, create a new Bin.
  if (bestBin) {
    bestBin.add(item);
  } else {
    bins.push(new Bin([item], item));
  }

  return bins;
});
