function charCount(str, caseSensitive = true) {
  // Cria um objeto vazio para armazenar a frequência de caracteres
  const freq = {};

  // Loop pelos caracteres da string
  for (let char of str) {
    // Ignora espaços em branco e caracteres que não sejam letras ou números
    if (char.match(/[a-z0-9]/i)) {
      // Converte o caractere para letras minúsculas se não for sensível a maiúsculas e minúsculas
      if (!caseSensitive) {
        char = char.toLowerCase();
      }
      // Se o caractere já estiver no objeto de frequência, aumenta a contagem em 1, caso contrário, cria uma nova entrada com contagem 1
      freq[char] = freq[char] ? freq[char] + 1 : 1;
    }
  }

  // Retorna o objeto de frequência
  return freq;
}

console.log(charCount("Hello, World!", false));