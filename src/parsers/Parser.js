export default class Parser {

  constructor() {
    if (new.target === Parser) {
      throw new TypeError('Parser é abstrata e não pode ser instanciada diretamente.');
    }
  }

  parse(conteudo) {
    throw new Error(`${this.constructor.name} deve implementar parse(conteudo).`);
  }
}
