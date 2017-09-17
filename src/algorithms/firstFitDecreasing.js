const firstFit = require('./firstFit');
const { sortIntArrayDecreasing } = require('../utils');

/**
 * First-fit Decreasing algorithms.
 *
 * Sort the Items in decreasing order and call the First-fit algorithm.
 *
 * @param  {array} items=[] Items to store in the Bins
 * @param  {number} binSize=0 Size of the Bins
 */
module.exports = (items = [], binSize = 0) => firstFit(sortIntArrayDecreasing(items), binSize);
