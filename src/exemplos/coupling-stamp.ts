// Módulo A
class Pedido {
  constructor(
    private id: number,
    private descricao: string,
    private valor: number,
  ) {}

  getId(): number {
    return this.id;
  }

  getDescricao(): string {
    return this.descricao;
  }

  getValor(): number {
    return this.valor;
  }
}

// Módulo B
class GerenciadorPedido extends Pedido {
  mostrarIdPedido(): void {
    console.log(this.getId());
  }
}

// Utilização dos Módulos A e B
const pedido = new Pedido(1, "Produto A", 100);
const gerenciadorPedido = new GerenciadorPedido(pedido.getId(), pedido.getDescricao(), pedido.getValor());
gerenciadorPedido.mostrarIdPedido();
