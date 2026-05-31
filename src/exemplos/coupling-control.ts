// Módulo A
class ServiceProcessadorPagamento {
  processar(status: boolean): void {
    if (status) {
      console.log("Pagamento processado com sucesso.");
    } else {
      console.log("Falha ao processar pagamento.");
    }
  }
}

// Módulo B
class CarrinhoCompras {
  constructor(private servicePagamento: ServiceProcessadorPagamento) {}

  finalizarCompra(status: boolean): void {
    this.servicePagamento.processar(status);
  }
}

// Utilização dos Módulos A e B
const servicePagamento = new ServiceProcessadorPagamento();
const carrinho = new CarrinhoCompras(servicePagamento);
carrinho.finalizarCompra(true);
