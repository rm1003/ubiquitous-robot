export default class Reporter {

  constructor() {
    if (new.target === Reporter) {
      throw new TypeError('Reporter é abstrata e não pode ser instanciada diretamente.');
    }
  }

  reportar(cidades) {
    throw new Error(`${this.constructor.name} deve implementar reportar(cidades).`);
  }
}
