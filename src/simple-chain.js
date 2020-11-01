const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (!position || this.chain[position] === undefined || position == "") {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = "";

    for (let i = 0; i < this.chain.length; i++) {
      if (i == 0) {
        result += `( ${this.chain[i]} )`;
      } else {
        result += `~~( ${this.chain[i]} )`;
      }
    }
    this.chain = [];
    return result;
  },
};

module.exports = chainMaker;
