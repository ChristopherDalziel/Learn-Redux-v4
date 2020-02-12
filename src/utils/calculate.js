// Here we're allowing our tests to pass by exporting a default function that uses regex to match a portion of the expressions entered.

// Expression must match the following or return 0 (Regex?)
export default expression => {
  const matched = new RegExp(
    "([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*"
  ).exec(expression);

  if (!matched) {
    return 0;
  }

  // If any symbol other than '-' is entered tests wil fail
  if (/^[*+\/]/.test(expression)) {
    return () => {
      throw new Error("Cannot start the expression with invalid operators");
    };
  }

  return new Function(`return ${matched[0]}`)();
};
