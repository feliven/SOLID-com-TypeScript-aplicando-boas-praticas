// Módulo A
class LogService {
  registrarMensagem(mensagem: string): void {
    console.log(`[LOG] ${mensagem}`);
  }
}

// Módulo B
class ServicoAutenticacao {
  constructor(private logService: LogService) {}

  autenticarUsuario(): void {
    // Lógica de autenticação
    this.logService.registrarMensagem("Usuário autenticado com sucesso.");
  }
}

// Utilização dos Módulos A e B
const log = new LogService();
const servicoAutenticacao = new ServicoAutenticacao(log);
servicoAutenticacao.autenticarUsuario();
