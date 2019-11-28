const { colorize } = require('.');
const { random, ceil } = Math;
let output = 'abcdefghijklmnopqrstuvwxyz'.split('');
output = output.reduce(
  (a, c) => [...a, ...Object.values(colorize(c))],
  []
);

output.forEach(
  (c) => (
    process.stdout.write(
      `${' '.repeat(ceil(random()*10))}${c}${' '.repeat(ceil(random()*10))}`
    )
  )
);
