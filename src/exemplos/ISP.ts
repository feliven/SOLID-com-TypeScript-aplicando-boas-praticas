interface IPagamento {
  valorAPagar: number;
}

interface IPagamentoCartao extends IPagamento {
  numeroCartao: string;
  dataValidadeCartao: string;
  taxaTransacaoCobradaPelaBandeira: number;
  transacaoFoiAceita(): boolean;
}
interface IPagamentoCartaoCredito extends IPagamentoCartao {
  numeroMaximoParcelas: number;
  numeroParcelasContratado: number;
  taxaJurosCobradaPelaBandeira: number;
}
interface IPagamentoCartaoDebito extends IPagamentoCartao {}
interface IPagamentoCartaoMultiplo extends IPagamentoCartaoCredito, IPagamentoCartaoDebito {
  formaPagamento: string;
}

interface IPagamentoDinheiro extends IPagamento {
  valorPago: number;
  troco: number;
}
interface IPagamentoBoleto extends IPagamento {
  dataVencimento: string;
  aceitarAposVencimento: boolean;
}
interface IPagamentoCarteiraDigital extends IPagamento {
  nomeCarteira: string;
}
interface IPagamentoCriptomoeda extends IPagamento {
  nomeCriptomoeda: string;
  enderecoCarteiraDestino: string;
}

interface IPagamentoTransferencia extends IPagamento {
  agenciaDestino: number;
  contaDestino: number;
}
interface IPagamentoPix extends IPagamentoTransferencia {
  codigoPixCopiaCola: string;
  validadePixCopiaCola: number;
}

interface IPagamentoVale extends IPagamento {
  nomeIntermediadora: string;
  aceitaComoDebito: boolean;
  aceitaComoVoucher: boolean;
}
interface IPagamentoValeAlimentacao extends IPagamentoVale {}
interface IPagamentoValeRefeicao extends IPagamentoVale {}
