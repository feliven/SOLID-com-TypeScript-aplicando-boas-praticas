import CalculaSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";

export default class Pagamento {
  calculaSalario = new CalculaSalario();

  pagaColaborador(colaborador: Colaborador) {
    const salarioColaborador = this.calculaSalario.calcularSalario(colaborador.cargo);
    colaborador.saldo = salarioColaborador;
  }
}
