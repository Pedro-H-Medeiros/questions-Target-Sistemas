function countLetterA(text: String) {
  const formattedText = text.toUpperCase().trim()
  const letterToFind = "a"
  let quantity = 0

  for (let i = 0; i < formattedText.length; i++) {
    if (formattedText[i] === letterToFind.toUpperCase()) {
      quantity++
    }
  }

  if (quantity === 0) {
    return "A letra 'a' não aparece no texto inserido."
  } else {
    return `A letra 'a' se repete ${quantity} vezes no texto inserido.`
  }
}

console.log(countLetterA("pedro"));
console.log(countLetterA("AmazôniA"));
