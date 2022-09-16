const { Board, Led } = require("johnny-five");
const board = new Board({
  port: "/dev/ttyUSB0"
});

board.on("ready", () => {
  // Create a standard `led` component
  // on a valid pwm pin  
  const led1 = new Led(8); 
  const led2 = new Led(11);

  board.repl.inject({
      led1: led1,
      led2: led2
  });
});
