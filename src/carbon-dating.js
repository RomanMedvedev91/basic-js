const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity > 0 && sampleActivity !== Infinity) {
    // throw new CustomError("Not implemented");
    const ka = 0.693 / HALF_LIFE_PERIOD;

    const ages = Math.round(Math.log(MODERN_ACTIVITY / sampleActivity) / ka);
    console.log(ages);
    return ages;
  } else {
    return false;
  }
  // remove line with error and write your code here
};
