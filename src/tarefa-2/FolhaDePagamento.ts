export class FolhaDePagamento {
  MES_COMERCIAL = 20; // dias trabalhados no mês

  calcularSalarioMensal(GANHO_POR_HORA: number, CARGA_HORARIA_DIARIA: number): number {
    return GANHO_POR_HORA * CARGA_HORARIA_DIARIA * this.MES_COMERCIAL;
  }
}
