console.log('Starting app...');

setTimeout(() => {
  console.log('two second timer...');
}, 2000);

setTimeout(() => {
  console.log('zero second timer...');
}, 0);

setTimeout(() => {
  console.log('one second timer...');
}, 1000);

console.log('Stopping app...');