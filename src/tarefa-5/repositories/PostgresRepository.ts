import { ICliente, IRepository } from "../interfaces/interfaces";

export default class PostgresRepository implements IRepository {
  private db: Record<number, ICliente>;

  constructor() {
    this.db = {};
  }

  buscaClientePorId(id: number) {
    return this.db[id];
  }

  adicionaCliente(cliente: ICliente) {
    this.db[cliente.id] = cliente;
  }

  listaClientes(): ICliente[] {
    return Object.values(this.db);
  }
}
