/** Class representing a Bin. */
module.exports = class Bin {
  /**
   * @param  {number[]} items=[]
   * @param  {number} size=0
   */
  constructor(items = [], size = 0) {
    this.size = size;
    this.items = items;
  }
  /**
   * Add the item to the Bin
   * @param  {number} item=0
   */
  add(item = 0) {
    this.size += item;
    this.items.push(item);
  }
};
