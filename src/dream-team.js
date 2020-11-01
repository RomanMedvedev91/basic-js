const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members
      .map((el) => {
        const result =
          typeof el === "string" ? el.trim().charAt(0).toUpperCase() : "";
        return result;
      })
      .sort()
      .join("");
  } else {
    return false;
  }
  // remove line with error and write your code here
};
