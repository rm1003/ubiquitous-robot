export default class ReportGenerator {

  constructor(reader, parser, formatter) {
    this.reader = reader;
    this.parser = parser;
    this.formatter = formatter;
  }

  gerar(caminho) {
    const conteudo = this.reader.ler(caminho);
    const cidades = this.parser.parse(conteudo);
    return this.formatter.reportar(cidades);
  }
}
