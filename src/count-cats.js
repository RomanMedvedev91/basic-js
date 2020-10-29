const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  // throw new CustomError('Not implemented');
  const arr = array.reduce((acc, val) => {
    return acc.concat(val);
  }, []);
  // const count = 0;
  const cats = arr.reduce((acc, val) => {
    if (val === "^^") acc++;
    return acc;
  }, 0);
  return cats;
  // remove line with error and write your code here
};
