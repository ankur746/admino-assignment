function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  let numberString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEndIndex);

    if (delimiter.startsWith("[") && delimiter.endsWith("]")) {
      delimiter = delimiter.substring(1, delimiter.length - 1);
    }

    numberString = numbers.substring(delimiterEndIndex + 1);
  }

  let normalizedNumbers = numberString.replace(/\n/g, delimiter);

  let numArray = normalizedNumbers.split(delimiter);

  let sum = 0;
  for (let num of numArray) {
    let parsedNumber = parseFloat(num);
    if (!isNaN(parsedNumber)) {
      sum += parsedNumber;
    }
  }

  return sum;
}

module.exports = add;
