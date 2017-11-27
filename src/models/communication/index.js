const ip = "ws://192.168.1.10:8080";

let ws;

module.exports = {
  send(bytes) {
    console.log(`sending ${bytes}`);
    ws.send(bytes)
  },

  connect() {
    ws = new WebSocket(ip);

    ws.onopen = () => {
      console.log(`connected to ${ip}`);
    };

    ws.onclose = () => {
      console.log(`closed ${ip}`);
    }
  }
};