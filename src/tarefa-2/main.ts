import { Contrato } from "./Contrato";
import { TipoFuncionario } from "./TipoFuncionario";

const clt = new Contrato(TipoFuncionario.CLT, 24, 8);
const estagiario = new Contrato(TipoFuncionario.ESTAGIO, 14, 4);

clt.descreverFuncionario();
estagiario.descreverFuncionario();

const pejotinha = new Contrato(TipoFuncionario.PJ, 30, 9);

pejotinha.descreverFuncionario();
