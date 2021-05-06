const factorial = inputNumber => {
  if (inputNumber === 1) return 1
  return inputNumber * factorial(inputNumber - 1)
}
