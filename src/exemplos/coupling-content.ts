// Abstrações (Interfaces)
interface ICalculadora {
  somar(a: number, b: number): void;
  obterResultado(): number;
}

interface ILogger {
  registrarLog(mensagem: string): void;
}

// Módulo A — implementação concreta da calculadora
class Calculadora implements ICalculadora {
  private resultado: number = 0;

  somar(a: number, b: number): void {
    this.resultado = a + b;
  }

  obterResultado(): number {
    return this.resultado;
  }
}

// Módulo B — depende da abstração ILogger, não acessa dados internos de outro módulo
class Logger implements ILogger {
  registrarLog(mensagem: string): void {
    console.log(mensagem);
  }
}

// Utilização — a composição acontece externamente, sem acoplamento de conteúdo
const calculadora: ICalculadora = new Calculadora();
const logger: ILogger = new Logger();

calculadora.somar(2, 3);
logger.registrarLog(`Resultado da operação: ${calculadora.obterResultado()}`);
