import Colaborador from "./Colaborador";
import QuadroDeColaboradores from "./QuadroDeColaboradores";
import GeraRelatorio from "./GeraRelatorio";
import { Cargos } from "./enum/cargos";
import CalculaSalario from "./CalculaSalario";
import Pagamento from "./Pagamento";

const quadroColaboradores = new QuadroDeColaboradores();
const calculaSalario = new CalculaSalario();
const geraRelatorio = new GeraRelatorio(quadroColaboradores.colaboradores, calculaSalario);
const pagamento = new Pagamento(calculaSalario);

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

quadroColaboradores.contratar(colaborador1);
quadroColaboradores.contratar(colaborador2);
quadroColaboradores.contratar(colaborador3);

console.log(geraRelatorio.gerarJSON());

console.log(colaborador1);
pagamento.pagar(colaborador1);
console.log(colaborador1);
