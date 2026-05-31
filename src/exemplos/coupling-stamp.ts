// Abstrações (Interfaces segregadas — ISP)
interface Identificavel {
  getId(): number;
}

interface IPedido extends Identificavel {
  getId(): number;
  getDescricao(): string;
  getValor(): number;
}

// Módulo A — implementa todas as interfaces que precisa
class Pedido implements IPedido {
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

// Módulo B — depende apenas da interface que realmente usa (ISP + DIP)
class GerenciadorPedido {
  constructor(private pedidoId: Identificavel) {}

  mostrarIdPedido(): void {
    console.log(this.pedidoId.getId());
  }
}

// Utilização dos Módulos A e B
const pedido = new Pedido(1, "Produto A", 100);
const gerenciadorPedido = new GerenciadorPedido(pedido);
gerenciadorPedido.mostrarIdPedido();
