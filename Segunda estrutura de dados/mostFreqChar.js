function mostFreqChar(str, startIndex = 0) {
    if (str.length === 0 || startIndex >= str.length) {
      return null; // retornar nulo se a string de entrada for vazia ou o índice inicial for maior ou igual ao comprimento da string.
    }
  
    const freq = {}; // objeto para armazenar a frequência de cada caractere
    let maxFreq = 0; // frequência máxima encontrada até agora
    let mostFreqChar = null; // caractere mais frequente encontrado até agora
  
    for (let i = startIndex; i < str.length; i++) {
      const char = str[i];
      freq[char] = (freq[char] || 0) + 1; // incrementar a frequência do caractere atual
  
      if (freq[char] > maxFreq) { // se o caractere atual é mais frequente do que o atual máximo
        maxFreq = freq[char];
        mostFreqChar = char;
      }
    }
  
    return mostFreqChar;
  }