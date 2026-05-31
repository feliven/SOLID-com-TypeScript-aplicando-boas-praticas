interface IMetodoPagamento {
  pagar(valor: number): void;
}

class PagamentoCheque implements IMetodoPagamento {
  pagar(valor: number): void {
    console.log(`O pagamento de ${valor} será feito por cheque.`);
  }
}

class PagamentoDinheiro implements IMetodoPagamento {
  pagar(valor: number): void {
    console.log(`O pagamento de ${valor} será feito por dinheiro.`);
  }
}

class PagamentoPix implements IMetodoPagamento {
  pagar(valor: number): void {
    console.log(`O pagamento de ${valor} será feito por Pix.`);
  }
}

class PagamentoTransferencia implements IMetodoPagamento {
  pagar(valor: number): void {
    console.log(`O pagamento de ${valor} será feito por transferência.`);
  }
}

interface IPagamento {
  valor: number;
  metodoPagamento: IMetodoPagamento;
  pagar(): void;
}

class Pagamento implements IPagamento {
  valor: number;
  metodoPagamento: IMetodoPagamento;

  constructor(valor: number, metodoPagamento: IMetodoPagamento) {
    this.valor = valor;
    this.metodoPagamento = metodoPagamento;
  }

  pagar(): void {
    this.metodoPagamento.pagar(this.valor);
  }
}

const pagamentoCheque = new Pagamento(100, new PagamentoCheque());
pagamentoCheque.pagar();

const pagamentoDinheiro = new Pagamento(200, new PagamentoDinheiro());
pagamentoDinheiro.pagar();

const pagamentoTransferencia = new Pagamento(300, new PagamentoTransferencia());
pagamentoTransferencia.pagar();

const pagamentoPix = new Pagamento(300, new PagamentoPix());
pagamentoPix.pagar();
