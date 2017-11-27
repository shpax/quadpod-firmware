const leg = require('./leg');
const communication = require('../communication');

const legs = [
  leg(0,1,2, false),
  leg(4,5,6, true),
  leg(8,9,10, false),
  leg(12,13,14, true),
];

module.exports = {
  move(legId, rot, ank, foot) {
    legs[legId].move(rot, ank, foot);
    communication.send(legs[legId].ws);
  },

  connect() {
    communication.connect();
  },

  test() {
    legs.forEach((l, i) => setTimeout(() => {
      this.move(i, 0, 0, 0);

      setTimeout(() => this.move(i, 180, 180, 180), 1000)
    }, i * 2000))
  }
};