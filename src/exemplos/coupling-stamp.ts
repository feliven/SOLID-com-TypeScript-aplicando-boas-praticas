interface IPedido {
  id: number;
  descricao: string;
  valor: number;
}

// Módulo A
class Pedido {
  constructor(private pedido: IPedido) {}

  getId(): number {
    return this.pedido.id;
  }

  getPedido(): IPedido {
    return this.pedido;
  }
}

// Módulo B
class GerenciadorPedido extends Pedido {
  constructor(pedido: IPedido) {
    super(pedido);
  }

  mostrarIdPedido(): void {
    console.log(this.getId());
  }
}

// Utilização dos Módulos A e B
const pedido = new Pedido({ id: 1, descricao: "Produto A", valor: 100 });
const gerenciadorPedido = new GerenciadorPedido(pedido.getPedido());
gerenciadorPedido.mostrarIdPedido();
