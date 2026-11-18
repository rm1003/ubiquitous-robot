import Parser from './Parser.js';

export default class TsvParser extends Parser {

  parse(conteudo) {
    const linhas = conteudo.split(/\r?\n/).filter((linha) => linha.trim() !== '');

    if (linhas.length === 0) {
      throw new Error('Formato TSV inválido: arquivo vazio.');
    }

    const cabecalho = linhas[0].split('\t').map((coluna) => coluna.trim().toLowerCase());
    const indiceNome = cabecalho.indexOf('nome');

    if (indiceNome === -1) {
      throw new Error('Formato TSV inválido: coluna "Nome" não encontrada.');
    }

    const nomes = [];

    for (let i = 1; i < linhas.length; i++) {
      const colunas = linhas[i].split('\t');

      if (colunas.length <= indiceNome) {
        throw new Error(`Formato TSV inválido: linha ${i + 1} sem a coluna "Nome".`);
      }

      nomes.push(colunas[indiceNome].trim());
    }

    return nomes;
  }
}
