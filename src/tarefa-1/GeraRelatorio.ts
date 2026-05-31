import CalculaSalario from "./CalculaSalario";
import type Colaborador from "./Colaborador";

export default class GeraRelatorio {
  constructor(
    private _colaboradores: Colaborador[],
    private _servicoCalulaSalario: CalculaSalario,
  ) {}

  gerarJSON() {
    let relatorio = this._colaboradores.map((colaborador) => {
      return {
        nome: colaborador.nome,
        cargo: colaborador.cargo,
        salario: this._servicoCalulaSalario.calcular(colaborador.cargo),
      };
    });
    return JSON.stringify(relatorio, null, 2);
  }
}
