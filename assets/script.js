// Assignment code here
const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeNumbersElement = document.getElementById
('includeNumbers')
const includeSymbolsElement = document.getElementById
('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58,64))
  .concat(arrayFromLowToHigh(91.96)).concat(arrayFromLowToHigh(123,126))


form.addEventListener('submit', e=> {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked 
  const includeNumbers = includeNumbersElement.checked 
  const includeSymbols = includeSymbolsElement.checked 
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)

})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  console.log(LOWERCASE_CHAR_CODES);
}

function arrayFromLowToHigh(low,high) {
  const array = {}
  for (let i = low; i<= high; i++) {
    array.push(i)
  }
  return array
}


function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}






// // Write password to the #password input
// function writePassword(length) {
//   let password = '';
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
//   let passwordLength = length;

//   const array = new Uint32Array(length);
//   self.crypto.getRandomValues(array);

//   for (i = 0; i < length; i++) {
//     password += chars[array[i] % chars.length];
//   } 
//   console.log(password);
//   return password;

// }

