module.exports = function toReadable (number) {
  let i = 0;
  let result = "";
  const str = number.toString();
  let lastNumber = "";

  while (i < str.length) {
    i++;
  }

  const oneNumber = (number1) => {
    if (number1 === "0") result = result + "zero";
    if (number1 === "1") result = result + "one";
    if (number1 === "2") result = result + "two";
    if (number1 === "3") result = result + "three";
    if (number1 === "4") result = result + "four";
    if (number1 === "5") result = result + "five";
    if (number1 === "6") result = result + "six";
    if (number1 === "7") result = result + "seven";
    if (number1 === "8") result = result + "eight";
    if (number1 === "9") result = result + "nine";
  };

  const upToTwenty = (number2) => {
    if (number2 === "0") result = result + "ten";
    if (number2 === "1") result = result + "eleven";
    if (number2 === "2") result = result + "twelve";
    if (number2 === "3") result = result + "thirteen";
    if (number2 === "4") result = result + "fourteen";
    if (number2 === "5") result = result + "fifteen";
    if (number2 === "6") result = result + "sixteen";
    if (number2 === "7") result = result + "seventeen";
    if (number2 === "8") result = result + "eighteen";
    if (number2 === "9") result = result + "nineteen";
  };

  const tensToHundreds = (number, tens) => {
      if (number[1] === "0") result = tens;
      else {
        oneNumber(number[1]);
        lastNumber = result;
        result = "";
        result = result + tens + " " + lastNumber;
      }
  }

  const hundredsToThousands = (number, hundreds) => {
    if (number[1] === '0') {
    if (number[2] === '0') {
      result = hundreds;
      return;
    }
    else {
      oneNumber(number[2]);
      lastNumber = result;
      result = '';
      result = result + hundreds + ' ' + lastNumber;
      return;
      }
    }

    if (number[1] === '1') {
      upToTwenty(number[2]);
      lastNumber = result;
      result = '';
      result = result + hundreds + ' ' + lastNumber;
    }
    else {
      upToHundred(number.slice(1));
      lastNumber = result;
      result = '';
      result = result + hundreds + ' ' + lastNumber;
    }
  }


  const upToHundred = (number) => {
    if (number[0] === "1") {
      upToTwenty(number[1]);
    }
    else {
          if (number[0] === '2') tensToHundreds(number, 'twenty');
          if (number[0] === '3') tensToHundreds(number, 'thirty');
          if (number[0] === '4') tensToHundreds(number, 'forty');
          if (number[0] === '5') tensToHundreds(number, 'fifty');
          if (number[0] === '6') tensToHundreds(number, 'sixty');
          if (number[0] === '7') tensToHundreds(number, 'seventy');
          if (number[0] === '8') tensToHundreds(number, 'eighty');
          if (number[0] === '9') tensToHundreds(number, 'ninety');
         }
    }

  const upToThousand = (number) => {
      if (number[0] === '1') hundredsToThousands(number, 'one hundred');
      if (number[0] === '2') hundredsToThousands(number, 'two hundred');
      if (number[0] === '3') hundredsToThousands(number, 'three hundred');
      if (number[0] === '4') hundredsToThousands(number, 'four hundred');
      if (number[0] === '5') hundredsToThousands(number, 'five hundred');
      if (number[0] === '6') hundredsToThousands(number, 'six hundred');
      if (number[0] === '7') hundredsToThousands(number, 'seven hundred');
      if (number[0] === '8') hundredsToThousands(number, 'eight hundred');
      if (number[0] === '9') hundredsToThousands(number, 'nine hundred');
  };

  if (i === 1) oneNumber(str[0]);

  if (i === 2) upToHundred(str);

  if (i === 3) upToThousand(str);

  return result;
}
