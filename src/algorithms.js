const { stringToIntArray, intArrayToString } = require('./utils');

const bestFitDecreasing = require('./algorithms/bestFitDecreasing');
const firstFit = require('./algorithms/firstFit');
const firstFitDecreasing = require('./algorithms/firstFitDecreasing');
const bestFit = require('./algorithms/bestFit');

const DEFAULT_BIN_SIZE = 10;

/**
 * Turns the string of items in an array of int, call the choosen algorithm
 * and return results with the format: `bin_1_items`/`bin_2_items`...
 *
 * @param {fun} algorithm Choosen algorithm.
 * @param {string} items='' Items to store in the Bins.
 */
const createAlgorithm = algorithm => (items = '') =>
  algorithm(stringToIntArray(items), DEFAULT_BIN_SIZE)
    .map(bin => intArrayToString(bin))
    .join('/');

module.exports = {
  [Symbol.for('ff')]: {
    description: 'First Fit',
    run: createAlgorithm(firstFit),
  },
  [Symbol.for('ffd')]: {
    description: 'First Fit Decreasing',
    run: createAlgorithm(firstFitDecreasing),
  },
  [Symbol.for('bf')]: {
    description: 'Best Fit',
    run: createAlgorithm(bestFit),
  },
  [Symbol.for('bfd')]: {
    description: 'Best Fit Decreasing',
    run: createAlgorithm(bestFitDecreasing),
  },
};
