// Módulo A
class Calculadora {
  private resultado: number = 0;

  somar(a: number, b: number): void {
    this.resultado = a + b;
  }

  obterResultado(): number {
    return this.resultado;
  }
}

// Módulo B
class Logger {
  constructor(private resultado: number) {}

  registrarLog(): void {
    console.log(`Resultado da operação: ${this.resultado}`);
  }
}

// Utilização dos Módulos A e B
const calculadora = new Calculadora();
calculadora.somar(2, 3);
const logger = new Logger(calculadora.obterResultado());
logger.registrarLog();
