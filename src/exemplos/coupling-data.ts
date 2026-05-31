class Usuario {
  constructor(private nome: string) {}

  getNome(): string {
    return this.nome;
  }
}

class GerenciadorUsuario extends Usuario {
  constructor(nome: string) {
    super(nome);
  }

  mostrarNomeUsuario(): void {
    console.log(this.getNome());
  }
}

// Utilização dos Módulos A e B
const usuario = new Usuario("Ana");
const gerenciadorUsuario = new GerenciadorUsuario(usuario.getNome());
gerenciadorUsuario.mostrarNomeUsuario();
