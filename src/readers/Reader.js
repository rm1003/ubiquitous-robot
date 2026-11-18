export default class Reader {

  constructor() {
    if (new.target === Reader) {
      throw new TypeError('Reader é abstrata e não pode ser instanciada diretamente.');
    }
  }

  ler(caminho) {
    throw new Error(`${this.constructor.name} deve implementar ler(caminho).`);
  }
}
