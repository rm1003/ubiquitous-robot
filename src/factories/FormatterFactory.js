import CidadesHTMLReporter from '../reporters/CidadesHTMLReporter.js';
import CidadesTXTReporter from '../reporters/CidadesTXTReporter.js';
import CidadesMarkdownReporter from '../reporters/CidadesMarkdownReporter.js';

export default class FormatterFactory {

  constructor() {
    this.formatters = new Map();
    this.registrar('html', CidadesHTMLReporter);
    this.registrar('txt', CidadesTXTReporter);
    this.registrar('md', CidadesMarkdownReporter);
  }

  registrar(formato, ClasseFormatter) {
    this.formatters.set(formato, ClasseFormatter);
  }

  criar(formato) {
    const ClasseFormatter = this.formatters.get(formato);

    if (!ClasseFormatter) {
      const disponiveis = [...this.formatters.keys()].join(', ');
      throw new Error(`Formato de saída não suportado: "${formato}". Use: ${disponiveis}.`);
    }

    return new ClasseFormatter();
  }
}
