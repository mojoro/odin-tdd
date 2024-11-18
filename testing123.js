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

const Calculator = () => {
  const add = (a, b) => {
    return a + b;
  };

  return { add };
};

export { Calculator };
