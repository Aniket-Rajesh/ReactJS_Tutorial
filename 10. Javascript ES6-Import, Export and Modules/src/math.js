const pi = 3.141562;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi;
// There can only be 1 default export per file.
export { doublePi, triplePi };
