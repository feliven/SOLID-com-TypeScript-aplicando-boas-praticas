import { IRepository, ICliente } from "../interfaces/interfaces";

export default class InMemoryRepository implements IRepository {
  private db: ICliente[];

  constructor() {
    this.db = [];
  }

  buscaClientePorId(id: number) {
    const index = this.db.findIndex((cliente) => {
      return cliente.id === id;
    });

    return this.db[index];
  }

  adicionaCliente(cliente: ICliente) {
    const clienteExiste = Boolean(this.buscaClientePorId(cliente.id));

    if (clienteExiste) {
      throw new Error("ID do cliente já existe!");
    } else {
      this.db.push(cliente);
    }
  }

  listaClientes() {
    return this.db;
  }
}
