const { Board } = require("johnny-five");

// Jconst { Board } = require("johnny-five");

// Johnny-Five will try its hardest to detect the port for you,
// however you may also explicitly specify the port by passing
// it as an optional property to the Board constructor:
const board = new Board({
  port: "/dev/ttyUSB0"
});

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", () => {
  board.pinMode(13, board.MODES.OUTPUT);

  board.loop(1500, () => {
    // Whatever the last value was, write the opposite
    board.digitalWrite(13, board.pins[13].value ? 0 : 1);
  });
});
