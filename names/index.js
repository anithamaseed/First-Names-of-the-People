let namesList = require("../country/state/city/index");
let getFirstNames = require("../utilities/utils/index");
const getPeopleInCity = (namesList) => {
  return getFirstNames(namesList);
};
module.exports = getPeopleInCity;
