const five = require('johnny-five');
const board = new five.Board();

board.on('ready',() =>{
	const pulsingLED = new five.Led(11);
	const options ={
		easing : 'inOutSine',
		metronomic: true,
		loop : true,
		keyFrames : [0,128],
		duration : 1000
	};
	const timerLength = 10000;
	const animation = new five.Animation(pulsingLED);
	setTimeout(() => {			//设置延时，十秒后启动LED脉冲
		animation.enqueue(options);
		},timerLength);
	
});