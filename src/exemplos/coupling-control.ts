// Módulo A
class ProcessadorPagamento {
  processarPagamento(status: boolean): void {
    if (status) {
      console.log("Pagamento processado com sucesso.");
    } else {
      console.log("Falha ao processar pagamento.");
    }
  }
}

// Módulo B
class CarrinhoCompras extends ProcessadorPagamento {
  finalizarCompra(status: boolean): void {
    this.processarPagamento(status);
  }
}

// Utilização dos Módulos A e B
const carrinho = new CarrinhoCompras();
carrinho.finalizarCompra(true);
