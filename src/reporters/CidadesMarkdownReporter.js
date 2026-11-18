import Reporter from './Reporter.js';

export default class CidadesMarkdownReporter extends Reporter {

  reportar(cidades) {
    let result = '# Relatório de Nomes de Cidades\n\n';

    for (const cidade of cidades) {
      result += '- ' + this.escapar(cidade) + '\n';
    }

    return result;
  }

  escapar(texto) {
    return texto.replace(/[\\`*_\[\]<>|]/g, '\\$&');
  }
}
