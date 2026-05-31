// Abstração (Interface)
interface ILogService {
  registrarMensagem(mensagem: string): void;
}

// Módulo A — implementação concreta
class LogService implements ILogService {
  registrarMensagem(mensagem: string): void {
    console.log(`[LOG] ${mensagem}`);
  }
}

// Módulo B — depende da abstração, não da implementação concreta
class ServicoAutenticacao {
  constructor(private logService: ILogService) {}

  autenticarUsuario(): void {
    // Lógica de autenticação
    this.logService.registrarMensagem("Usuário autenticado com sucesso.");
  }
}

// Utilização dos Módulos A e B
const log: ILogService = new LogService();
const servicoAutenticacao = new ServicoAutenticacao(log);
servicoAutenticacao.autenticarUsuario();
