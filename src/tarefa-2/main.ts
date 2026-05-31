const MES_COMERCIAL = 20; // dias trabalhados no mês

interface Contrato {
  titulo: string;
  GANHO_POR_HORA: number;
  CARGA_HORARIA_DIARIA: number;
}

class Funcionario implements Contrato {
  constructor(
    public titulo: string,
    public GANHO_POR_HORA: number,
    public CARGA_HORARIA_DIARIA: number,
  ) {}

  getRemuneracao(): number {
    return this.GANHO_POR_HORA * this.CARGA_HORARIA_DIARIA * MES_COMERCIAL;
  }

  descreverFuncionario() {
    console.log(`Sou ${this.titulo} e meu salário líquido mensal é R$ ${this.getRemuneracao()}`);
  }
}

export class Celetista extends Funcionario {
  constructor() {
    super("CLT", 24, 8);
  }
}

export class Estagiario extends Funcionario {
  constructor() {
    super("estagiário", 14, 4);
  }
}

export class Pejotinha extends Funcionario {
  constructor() {
    super("pejotinha", 30, 9);
  }
}

new Celetista().descreverFuncionario();
new Estagiario().descreverFuncionario();
new Pejotinha().descreverFuncionario();
