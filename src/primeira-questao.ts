function hasFibonacciSequence(num: number) {
  const inital_sequence: number[] = [0, 1]

  while (inital_sequence[inital_sequence.length - 1] < num) {
    // Soma o primeiro e valor anteriro de dentro do array 
     let nextNumFibonacci = inital_sequence[inital_sequence.length - 1] + inital_sequence[inital_sequence.length - 2]

    // Adicona cada soma ao array
     inital_sequence.push(nextNumFibonacci)
  }

  // Verifica se o número está no array Fibonacci 
  if (inital_sequence.includes(num)) {
    return `O número ${num} pertence à sequência`
  } else {
    return `O número ${num} não pertence à sequência`
  }
}

// Verifica o número 21 (Este encontra-se na sequência)
console.log(hasFibonacciSequence(21)); 
// Verifica o número 22 (Este NÃO encontra-se na sequência)
console.log(hasFibonacciSequence(22));