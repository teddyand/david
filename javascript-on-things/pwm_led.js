var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var ledA = new five.Led(9);
  var ledB = new five.Led(11);

var lights = new five.Leds([ledA, ledB]);

  // Set leds independently
  ledA.brightness(0);
  ledB.brightness(255);

  // Pulse all Leds.
  lights.pulse();

});
