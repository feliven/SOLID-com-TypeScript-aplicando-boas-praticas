interface IStatusPagamento {
  status: boolean;
  mensagem: string;
}

interface IProcessadorPagamento {
  processar(status: IStatusPagamento): void;
}

const listaStatus: IStatusPagamento[] = [
  { status: true, mensagem: "Pagamento processado com sucesso." },
  { status: false, mensagem: "Falha ao processar pagamento." },
];

// Módulo A
class ServiceProcessadorPagamento implements IProcessadorPagamento {
  processar(status: IStatusPagamento): void {
    // lógica de processamento de pagamento

    console.log(status.mensagem);
  }
}

// Módulo B
class CarrinhoCompras {
  constructor(private servicePagamento: IProcessadorPagamento) {}

  finalizarCompra(status: IStatusPagamento): void {
    this.servicePagamento.processar(status);
  }
}

// Utilização dos Módulos A e B
const servicePagamento = new ServiceProcessadorPagamento();
const carrinho = new CarrinhoCompras(servicePagamento);
carrinho.finalizarCompra(listaStatus[0]!);
