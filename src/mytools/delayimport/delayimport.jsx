// utils/delayImport.js
export function delayImport(factory, delay = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      factory().then(resolve);
    }, delay);
  });
}
