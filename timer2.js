// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which 
// point the program should say "Thanks for using me, ciao!" before terminating
const number = [1,2,3,4,5,6,7,8,9]
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === '\u0003') {//control + c
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key = number[key-1]) {
    process.stdout.write(`setting timer for ${key} seconds..`);
    setTimeout(()=> {
      process.stdout.write('\x07');
    }, Number(key) * 1000)
  }
  
});

console.log('after callback');