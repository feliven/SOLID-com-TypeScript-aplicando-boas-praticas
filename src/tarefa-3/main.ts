interface IFuncionario {
  getNome(): string;
  trabalha(): void;
}

interface IFuncionarioEfetivo extends IFuncionario {
  getSalario(): number;
}

interface IFuncionarioVoluntario extends IFuncionario {
  escreveRelatorio(): void;
}

abstract class Funcionario implements IFuncionario {
  constructor(
    protected nome: string,
    protected cargaHoraria: number,
  ) {
    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
  }

  getNome() {
    return this.nome;
  }

  abstract trabalha(): void;
}

class FuncionarioEfetivo extends Funcionario implements IFuncionarioEfetivo {
  constructor(
    nome: string,
    cargaHoraria: number,
    private salario: number,
  ) {
    super(nome, cargaHoraria);
    this.salario = salario;
  }

  trabalha(): void {
    console.log(`Me chamo ${this.nome} e eu trabalho ${this.cargaHoraria} horas por semana`);
  }

  getSalario(): number {
    return this.salario;
  }
}

class CalculadoraDeSalario {
  private readonly TAXA_DESCONTO = 0.2;

  calculaSalarioLiquido(funcionario: IFuncionarioEfetivo): number {
    const salario = funcionario.getSalario();
    const desconto = salario * this.TAXA_DESCONTO;
    return salario - desconto;
  }

  calculaParticipacaoDeLucros(funcionario: IFuncionarioEfetivo, lucro: number): number {
    return lucro * funcionario.getSalario();
  }
}

class FuncionarioVoluntario extends Funcionario implements IFuncionarioVoluntario {
  orientador: IFuncionarioEfetivo;

  constructor(nome: string, cargaHorariaExtensao: number, funcionarioEfetivo: IFuncionarioEfetivo) {
    super(nome, cargaHorariaExtensao);
    this.orientador = funcionarioEfetivo;
  }

  escreveRelatorio(): void {
    console.log(`Me chamo ${this.nome} e eu escrevo relatórios para o meu orientador ${this.orientador.getNome()}`);
  }

  trabalha(): void {
    console.log(
      `Me chamo ${this.nome} e eu pesquiso ${this.cargaHoraria} horas por semana para cumprir na minha graduação`,
    );
  }
}

const funcionarioEfetivo = new FuncionarioEfetivo("João", 40, 2400);
const calculadora = new CalculadoraDeSalario();
const funcionarioVoluntario = new FuncionarioVoluntario("Enzo", 20, funcionarioEfetivo);

//Efetivo
console.log("nome:", funcionarioEfetivo.getNome());
console.log("salário bruto:", funcionarioEfetivo.getSalario());
console.log("salário líquido:", calculadora.calculaSalarioLiquido(funcionarioEfetivo));
console.log("salário com PL:", calculadora.calculaParticipacaoDeLucros(funcionarioEfetivo, 2.5), "\n");

//Voluntário
console.log("nome:", funcionarioVoluntario.getNome());
