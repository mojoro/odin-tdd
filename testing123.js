function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalize };

function reverse(string) {
  let reversed = "";
  for (let i = string.length; i >= 0; i--) {
    reversed += string.charAt(i);
  }
  return reversed;
}

export { reverse };

const Calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

export { Calculator };

// A-Z is 65-90, a-z is 97-122
function caesarCipher(string, degree) {
  let shiftedString = "";
  for (let i = 0; i < string.length; i++) {
    shiftedString += String.fromCharCode(
      processCharCode(string.charCodeAt(i), degree)
    );
  }

  return shiftedString;
}

// function to ignore other unicode values
function isAlphabetical(charCode) {
  if ((65 <= charCode && charCode <= 90) || (97 <= charCode && charCode <= 122))
    return true;
  else return false;
}

// function to return the opposite side of the corresponding range if the initial character is alphabetical
function processCharCode(charCode, degree) {
  if (degree > 26) degree = degree % 26;

  if (!isAlphabetical(charCode) || degree == 0) return charCode;

  let shiftedCode = charCode + degree;
  if (isAlphabetical(shiftedCode)) return shiftedCode;

  if (degree > 0) return shiftedCode - 26;
  else if (degree < 0) return shiftedCode + 26;
}

export { caesarCipher };

function analyzeArray(array) {
  if (!Array.isArray(array)) throw new Error("Please pass in an array");
  const isNotInteger = (element) => !Number.isInteger(element);
  if (array.some(isNotInteger)) throw new Error("Must be an array of numbers!");
  let average = 0,
    sum = 0,
    min = 0,
    max = 0,
    length = array.length;

  array.sort((a, b) => a - b);
  min = array[0];
  max = array[length - 1];
  sum = array.reduce((accumulator, current) => accumulator + current);
  average = sum / length;

  return { average, min, max, length };
}

export { analyzeArray };
