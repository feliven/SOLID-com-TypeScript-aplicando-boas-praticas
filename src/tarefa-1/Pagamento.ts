import CalculaSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";

export default class Pagamento {
  constructor(private _servicoCalulaSalario: CalculaSalario) {}

  pagar(colaborador: Colaborador) {
    const salarioColaborador = this._servicoCalulaSalario.calcular(colaborador.cargo);
    colaborador.saldo = salarioColaborador;
  }
}
