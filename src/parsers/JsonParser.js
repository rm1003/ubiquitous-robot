import Parser from './Parser.js';

export default class JsonParser extends Parser {

  parse(conteudo) {
    const dados = JSON.parse(conteudo);

    if (!Array.isArray(dados)) {
      throw new Error('Formato JSON inválido: esperado uma lista de cidades.');
    }

    const nomes = [];

    for (const item of dados) {
      if (!item || typeof item.Nome !== 'string') {
        throw new Error('Formato JSON inválido: esperado o campo "Nome" em cada cidade.');
      }

      nomes.push(item.Nome);
    }

    return nomes;
  }
}
