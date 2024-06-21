// a function that take 3 param for creating an array of numbers 
// start first number    
// stop end number
// first number + step = second number    
export const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (_value, index) => start + index * step
  );
