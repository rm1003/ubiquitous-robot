import * as fs from 'node:fs';
import Reader from './Reader.js';

export default class FileReader extends Reader {

  ler(caminho) {
    if (!fs.existsSync(caminho)) {
      throw new Error(`Arquivo não encontrado: ${caminho}`);
    }

    return fs.readFileSync(caminho, 'utf-8');
  }
}
