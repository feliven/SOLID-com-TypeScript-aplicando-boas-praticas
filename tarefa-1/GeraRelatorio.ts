import CalculaSalario from "./CalculaSalario";
import QuadroDeColaboradores from "./QuadroDeColaboradores";

export default class GeraRelatorio extends QuadroDeColaboradores {
  calculaSalario = new CalculaSalario();

  gerarRelatorioJSON() {
    let relatorio = this._colaboradores.map((colaborador) => {
      return {
        nome: colaborador.nome,
        cargo: colaborador.cargo,
        salario: this.calculaSalario.calcularSalario(colaborador.cargo),
      };
    });
    return JSON.stringify(relatorio);
  }
}
