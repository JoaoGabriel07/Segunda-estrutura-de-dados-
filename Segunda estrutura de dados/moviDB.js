const filmes = [
    { titulo: "O Poderoso Chefão", classificacao: 9.2, hasWatched: true },
    { titulo: "Um Sonho de Liberdade", classificacao: 9.3, hasWatched: true },
    { titulo: "Interestelar", classificacao: 8.6, hasWatched: false },
    { titulo: "O Senhor dos Anéis: O Retorno do Rei", classificacao: 9.0, hasWatched: true }
  ];
  
  for (let i = 0; i < filmes.length; i++) {
    const filme = filmes[i];
    const assistido = filme.hasWatched ? "assistido" : "não assistido";
    console.log(`Você ${assistido} "${filme.titulo}" - ${filme.classificacao} estrelas`);
  }