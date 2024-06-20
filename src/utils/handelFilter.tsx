export const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (_value, index) => start + index * step
  );
