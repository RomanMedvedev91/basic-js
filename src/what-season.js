const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  if (date === undefined) return "Unable to determine the time of year!";

  if (Object.prototype.toString.call(date) !== "[object Date]") throw "Error";

  let month = date.getMonth();

  if (month > 1 && month < 5) {
    return "spring";
  }
  if (month > 4 && month < 8) {
    return "summer";
  }
  if (month > 7 && month < 11) {
    return "fall";
  }

  return "winter";

  // remove line with error and write your code here
};
