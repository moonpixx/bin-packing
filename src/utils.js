/**
 * @param  {} ''
 */
module.exports.stringToIntArray = str => str.split('').map(c => parseInt(c, 10));

/**
 * @param  {} ''
 */
module.exports.intArrayToString = intArray => intArray.items.join('');

/**
 * Sort an Array of Int in decreasing order.
 *
 * @param  {array} intArray=[] Int to sort in decreasing order.
 */
module.exports.sortIntArrayDecreasing = (intArray = []) => intArray.sort().reverse();

/**
 * Create a function that starts with an empty Bin list,
 * and apply the specified algorithm to each item.
 *
 * @param  {array} items=[] Items to store in the Bins.
 * @param  {number} binSize=0 Size of the Bins.
 */
module.exports.createFitAlgorithm = algorithm => (items = [], binSize = 0) => {
  // Check if any item is too large for the Bin.
  if (items.some(item => item > binSize)) return [];

  return items.reduce(
    (bins, item) => algorithm(item, bins, binSize),
    [],
  );
};

