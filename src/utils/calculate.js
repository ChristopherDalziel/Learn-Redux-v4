// Here we're allowing our tests to pass by exporting a default function that uses regex to match a portion of the expressions entered.

export default expression => {
  const matched = new RegExp(
    "([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*"
  ).exec(expression);

  if (!matched) {
    return 0;
  }

  if (/^[*+\/]/.test(expression)) {
    return () => {
      throw new error("Cannot start the expression with invalid operators");
    };
  }

  return new Function(`return ${matched[0]}`)();
};
