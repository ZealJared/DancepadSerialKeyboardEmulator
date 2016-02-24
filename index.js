var SerialPort = require("serialport").SerialPort;
var robot = require("robotjs");

var serialPort = new SerialPort("COM3", {
  baudrate: 9600
});
serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    var chars = data.toString().split('\r\n');
    chars.pop();
    chars.forEach(function(char){
      //X=1,2 U=3,4 O=5,6 L=7,8 D=9,0 R=A,B
      switch(char){
        case '1':
          robot.keyToggle('x', 'down');
          break;
        case '2':
          robot.keyToggle('x', 'up');
          break;
        case '3':
          robot.keyToggle('u', 'down');
          break;
        case '4':
          robot.keyToggle('u', 'up');
          break;
        case '5':
          robot.keyToggle('o', 'down');
          break;
        case '6':
          robot.keyToggle('o', 'up');
          break;
        case '7':
          robot.keyToggle('l', 'down');
          break;
        case '8':
          robot.keyToggle('l', 'up');
          break;
        case '9':
          robot.keyToggle('d', 'down');
          break;
        case '0':
          robot.keyToggle('d', 'up');
          break;
        case 'A':
          robot.keyToggle('r', 'down');
          break;
        case 'B':
          robot.keyToggle('r', 'up');
          break;
        default:
          return;
      }
    });
  });
});
