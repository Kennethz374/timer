const agr = process.argv.slice(2);

for (let time of agr) {
  let time1 = Number(time);
  if (typeof(time1) === 'number' && time1 > 0){
    setTimeout(()=> {
      process.stdout.write('\x07');
    }, time1 * 1000)
  } else {
    continue;
  }

};

