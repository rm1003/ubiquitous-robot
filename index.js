import FileReader from './src/readers/FileReader.js';
import ReportGenerator from './src/ReportGenerator.js';
import FormatterFactory from './src/factories/FormatterFactory.js';
import ParserFactory from './src/factories/ParserFactory.js';

const formato = process.argv[2];
const caminho = process.argv[3]; 

if (!formato) {
  console.error('Uso: node index.js <html|txt|md> [arquivo]');
  process.exit(1);
}

try {
  const formatter = new FormatterFactory().criar(formato);
  const parser = new ParserFactory().criar(caminho);
  const reader = new FileReader();

  const generator = new ReportGenerator(reader, parser, formatter);
  const resultado = generator.gerar(caminho);

  console.log(resultado);
} catch (erro) {
  console.error(`Erro: ${erro.message}`);
  process.exitCode = 1;
}
