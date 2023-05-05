// Getting element by ID selectors for each type of criteria for assigning the range, number of characters
const characterAmountRange = document.getElementById
  ('characterAmountRange')
const characterAmountNumber = document.getElementById
  ('characterAmountNumber')

  // 
const includeUppercaseElement = document.getElementById
  ('includeUppercase')
const includeNumbersElement = document.getElementById
  ('includeNumbers')
const includeSymbolsElement = document.getElementById
  ('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

// Assigning range of variables from ASCII form  for javascript and calls it
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91.96)).concat(arrayFromLowToHigh(123, 126))
// Adds an event listener for each attribute and calls the output of that amount
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)
// take an event and  submits it
 form.addEventListener('submit', e => {
  // stops form from submitting and refreshing the page
  e.preventDefault()
  // adds selectors
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  // takes the amount of characters and other options and outputs int into the password 
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})
// generates password per function set up through character codes
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  const passwordCharacters = []
  // creates for loop to string all the charachters in password
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  // empty array to push and return values which reffers to each const array from ASCII
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}


function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}








