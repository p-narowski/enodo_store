const today = new Date();
const twoWeeksAfterToday=today.getTime()+1209600000;

const possibleDate = new Date(twoWeeksAfterToday).toLocaleDateString("en-CA");
module.exports = {
  possibleDate,
};
