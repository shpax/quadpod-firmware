const utils = require('./utils');


module.exports = (num, minValue = 0, maxValue = 200, invert = false) => {

  const servoId = num;
  let currentValue = minValue;
  let currentAngle = 0;

  return {
    set angle(angle) {
      const from = invert ? maxValue : minValue;
      const to = !invert ? maxValue : minValue;
      currentAngle = angle;
      currentValue = utils.mapValue(angle, 0, 180, from, to);
    },

    get angle() {
      return currentAngle;
    },

    get value() {
      return currentValue
    },

    get id() {
      return servoId;
    }
  }
};