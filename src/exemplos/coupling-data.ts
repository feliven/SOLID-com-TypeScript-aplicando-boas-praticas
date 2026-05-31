// Abstração (Interface)
interface IUsuario {
  getNome(): string;
}

// Módulo A — implementação concreta
class Usuario implements IUsuario {
  constructor(private nome: string) {}

  getNome(): string {
    return this.nome;
  }
}

// Módulo B — usa composição em vez de herança (tem um usuário, não é um usuário)
class GerenciadorUsuario {
  constructor(private usuario: IUsuario) {}

  mostrarNomeUsuario(): void {
    console.log(this.usuario.getNome());
  }
}

// Utilização dos Módulos A e B
const usuario: IUsuario = new Usuario("Ana");
const gerenciadorUsuario = new GerenciadorUsuario(usuario);
gerenciadorUsuario.mostrarNomeUsuario();
