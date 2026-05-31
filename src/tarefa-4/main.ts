type IFormaPagamento = "cheque" | "dinheiro" | "Pix";

interface IPagamento {
  valor: number;
  formaPagamento: IFormaPagamento;
  pagar(): void;
}

class Pagamento implements IPagamento {
  valor: number;
  formaPagamento: IFormaPagamento;

  constructor(valor: number, formaPagamento: IFormaPagamento) {
    this.valor = valor;
    this.formaPagamento = formaPagamento;
  }

  pagar(): void {
    console.log(`O pagamento de ${this.valor} será feito por ${this.formaPagamento}.`);
  }
}

const pagamentoCheque = new Pagamento(100, "cheque");
pagamentoCheque.pagar();

const pagamentoDinheiro = new Pagamento(200, "dinheiro");
pagamentoDinheiro.pagar();

// const pagamentoTransferencia = new Pagamento(300, "transferência");
// pagamentoTransferencia.pagar();

const pagamentoPix = new Pagamento(300, "Pix");
pagamentoPix.pagar();
