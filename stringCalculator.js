function add(numbers) {
    if (numbers === '') {
      return 0;
    }

  const numArray = numbers.split(/[\n,]/).map(Number).filter(num => !isNaN(num));
  
  return numArray.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = add;
  