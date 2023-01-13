module.exports = function toReadable (number) {
    let stringNumber = number.toString();
    let units ='';
    let tens = '';
    let hundreds = ''; 
    let message = '';
    if (stringNumber[stringNumber.length-1] === '0' && stringNumber[stringNumber.length-1] === stringNumber[0]) {
      units = 'zero';
      } else if (stringNumber[stringNumber.length-1] === '1' && stringNumber[stringNumber.length-2] === '1') {
      units = 'eleven'; 
      } else if (stringNumber[stringNumber.length-1] === '2' && stringNumber[stringNumber.length-2] === '1') {
        units = 'twelve'; 
      } else if (stringNumber[stringNumber.length-1] === '3' && stringNumber[stringNumber.length-2] === '1') {
        units = 'thirteen'; 
      } else if (stringNumber[stringNumber.length-1] === '4' && stringNumber[stringNumber.length-2] === '1') {
        units = 'fourteen'; 
      } else if (stringNumber[stringNumber.length-1] === '5' && stringNumber[stringNumber.length-2] === '1') {
        units = 'fifteen'; 
      } else if (stringNumber[stringNumber.length-1] === '6' && stringNumber[stringNumber.length-2] === '1') {
        units = 'sixteen'; 
      } else if (stringNumber[stringNumber.length-1] === '7' && stringNumber[stringNumber.length-2] === '1') {
        units = 'seventeen'; 
      } else if (stringNumber[stringNumber.length-1] === '8' && stringNumber[stringNumber.length-2] === '1') {
        units = 'eighteen'; 
      } else if (stringNumber[stringNumber.length-1] === '9' && stringNumber[stringNumber.length-2] === '1') {
        units = 'nineteen'; 
      } else if (stringNumber[stringNumber.length-1] === '1') {
        units = 'one';
        } else if (stringNumber[stringNumber.length-1] === '2') {
        units = 'two';  
        } else if (stringNumber[stringNumber.length-1] === '3') {
        units = 'three';  
        } else if (stringNumber[stringNumber.length-1] === '4') {
        units = 'four';  
        } else if (stringNumber[stringNumber.length-1] === '5') {
        units = 'five';  
        } else if (stringNumber[stringNumber.length-1] === '6') {
        units = 'six';  
        } else if (stringNumber[stringNumber.length-1] === '7') {
        units = 'seven';  
        } else if (stringNumber[stringNumber.length-1] === '8') {
        units = 'eight';  
        } else if (stringNumber[stringNumber.length-1] === '9') {
        units = 'nine';  
        }
    if (stringNumber[stringNumber.length-1] === '0' && stringNumber[stringNumber.length-2] === '1') {
      tens = 'ten';  
      } else if (stringNumber[stringNumber.length-2] === '2') {
      tens = 'twenty';  
      } else if (stringNumber[stringNumber.length-2] === '3') {
      tens = 'thirty';  
      } else if (stringNumber[stringNumber.length-2] === '4') {
      tens = 'forty';  
      } else if (stringNumber[stringNumber.length-2] === '5') {
      tens = 'fifty';  
      } else if (stringNumber[stringNumber.length-2] === '6') {
      tens = 'sixty';  
      } else if (stringNumber[stringNumber.length-2] === '7') {
      tens = 'seventy';  
      } else if (stringNumber[stringNumber.length-2] === '8') {
      tens = 'eighty';  
      } else if (stringNumber[stringNumber.length-2] === '9') {
      tens = 'ninety';  
        } 
    if (stringNumber[stringNumber.length-3] === '1') {
      hundreds = 'one hundred';  
      } else if (stringNumber[stringNumber.length-3] === '2') {
      hundreds = 'two hundred';  
      } else if (stringNumber[stringNumber.length-3] === '3') {
      hundreds = 'three hundred';  
      } else if (stringNumber[stringNumber.length-3] === '4') {
      hundreds = 'four hundred';  
      } else if (stringNumber[stringNumber.length-3] === '5') {
      hundreds = 'five hundred';  
      } else if (stringNumber[stringNumber.length-3] === '6') {
      hundreds = 'six hundred';  
      } else if (stringNumber[stringNumber.length-3] === '7') {
      hundreds = 'seven hundred';  
      } else if (stringNumber[stringNumber.length-3] === '8') {
      hundreds = 'eight hundred';  
      } else if (stringNumber[stringNumber.length-3] === '9') {
      hundreds = 'nine hundred';  
        } 
    message = `${hundreds} ${tens} ${units}`;
    if (!tens) {
        message = `${hundreds} ${units}`;    
    }
      return message.trim();
}
