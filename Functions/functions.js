function converToNumbers(strings) {
    let result = [];
  
    for (let i = 0; i < strings.length; i++) {
      const numbers = Number(strings[i]);
  
      if (Number.isNaN(numbers)) {
        return new Error(
          `Not valid number`
        );
      }
  
      result.push(numbers);
    }
    return result;
  }

  export default converToNumbers;