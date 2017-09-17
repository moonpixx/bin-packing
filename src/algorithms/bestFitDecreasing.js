const bestFit = require('./bestFit');
const { sortIntArrayDecreasing } = require('../utils');

/**
 * Best-fit Decreasing algorithms.
 *
 * Sort the Items in decreasing order and call the Best-fit algorithm.
 *
 * @param  {array} items=[] Items to store in the Bins
 * @param  {number} binSize=0 Size of the Bins
 */
module.exports = (items = [], binSize = 0) => bestFit(sortIntArrayDecreasing(items), binSize);
