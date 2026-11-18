import Parser from './Parser.js';

// Assume valores sem vírgulas e sem aspas, como no arquivo do projeto.
export default class CsvParser extends Parser {

  parse(conteudo) {
    const linhas = conteudo.trim().split('\n');

    const cabecalho = linhas[0].split(',').map((coluna) => coluna.trim());
    const indiceNome = cabecalho.indexOf('NOME');

    if (indiceNome === -1) {
      throw new Error('Formato inválido: coluna "NOME" não encontrada no CSV.');
    }

    const nomes = [];
    for (let i = 1; i < linhas.length; i++) {
      const linha = linhas[i].trim();

      if (linha === '') {
        continue;
      }

      const colunas = linha.split(',');
      nomes.push(colunas[indiceNome]);
    }

    return nomes;
  }
}
