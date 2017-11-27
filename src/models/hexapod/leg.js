const servo = require('./servo');
const config = require('./config');
const _ = require('lodash');

module.exports = (rotationId, ankleId, legId, invert = false) => {
  const rotServo = servo(
    rotationId,
    _.get(config.servo[rotationId], 'from', config.servo.default.from),
    _.get(config.servo[rotationId], 'to', config.servo.default.to),
    invert
  );

  const ankServo = servo(
    ankleId,
    _.get(config.servo[ankleId], 'from', config.servo.default.from),
    _.get(config.servo[ankleId], 'to', config.servo.default.to),
    invert
  );

  const legServo = servo(
    legId,
    _.get(config.servo[legId], 'from', config.servo.default.from),
    _.get(config.servo[legId], 'to', config.servo.default.to),
    invert
  );

  return {
    move(rotDeg, ankleDeg, legDeg) {
      rotServo.angle = rotDeg;
      ankServo.angle = ankleDeg;
      legServo.angle = legDeg;
    },

    get ws() {

      const servos = _.sortBy([rotServo, ankServo, legServo], ['id']);
      const values = _.map(servos, 'value');

      return new Uint8Array([1 << 7, servos[0].id, ...values]);
    }
  }
};