import * as path from 'node:path';
import JsonParser from '../parsers/JsonParser.js';
import CsvParser from '../parsers/CsvParser.js';
import TsvParser from '../parsers/TsvParser.js';

export default class ParserFactory {

  constructor() {
    this.parsers = new Map();
    this.registrar('.json', JsonParser);
    this.registrar('.csv', CsvParser);
    this.registrar('.tsv', TsvParser);
  }

  registrar(extensao, ClasseParser) {
    this.parsers.set(extensao.toLowerCase(), ClasseParser);
  }

  criar(caminho) {
    if (!caminho) {
      throw new Error('Caminho do arquivo não informado.');
    }

    const extensao = path.extname(caminho).toLowerCase();

    if (!extensao) {
      throw new Error(`Arquivo sem extensão: "${caminho}".`);
    }

    const ClasseParser = this.parsers.get(extensao);

    if (!ClasseParser) {
      const disponiveis = [...this.parsers.keys()].join(', ');
      throw new Error(
        `Extensão não suportada: "${extensao}". Extensões aceitas: ${disponiveis}.`
      );
    }

    return new ClasseParser();
  }
}
