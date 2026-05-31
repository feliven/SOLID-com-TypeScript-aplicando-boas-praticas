import { FolhaDePagamento } from "./FolhaDePagamento";
import { TipoFuncionario } from "./TipoFuncionario";

export class Contrato {
  constructor(
    private titulo: TipoFuncionario,
    private GANHO_POR_HORA: number,
    private CARGA_HORARIA_DIARIA: number,
    private _serviceFolhaPagamento = new FolhaDePagamento(),
  ) {}

  descreverFuncionario() {
    console.log(
      `Sou ${this.titulo} e meu salário líquido mensal é R$ ${this._serviceFolhaPagamento.calcularSalarioMensal(this.GANHO_POR_HORA, this.CARGA_HORARIA_DIARIA)}`,
    );
  }
}
