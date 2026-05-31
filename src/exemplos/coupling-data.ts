interface IUsuario {
  nome: string;
  idade?: number;
}

class Usuario {
  constructor(private usuario: IUsuario) {}

  getDados(): IUsuario {
    return this.usuario;
  }
}

class GerenciadorUsuario {
  constructor(private usuario: IUsuario) {}

  mostrarNomeUsuario(): void {
    console.log(this.usuario.nome);
  }
}

// Utilização dos Módulos A e B
const usuario = new Usuario({ nome: "Ana" });
const gerenciadorUsuario = new GerenciadorUsuario(usuario.getDados());
gerenciadorUsuario.mostrarNomeUsuario();
