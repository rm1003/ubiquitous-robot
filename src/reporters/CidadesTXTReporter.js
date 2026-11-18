import Reporter from './Reporter.js';

export default class CidadesTXTReporter extends Reporter {

  reportar(cidades) {
    let result = `Relatório de Nomes de Cidades
=============================
`;

    for (const cidade of cidades) {
      result += '* ' + cidade + '\n';
    }

    return result;
  }
}
