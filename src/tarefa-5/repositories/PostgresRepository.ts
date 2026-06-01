import { ICliente, IRepository } from "../interfaces/interfaces";

export default class PostgresRepository implements IRepository {
  private db: Record<number, ICliente>;

  constructor() {
    this.db = {};
  }

  buscaClientePorId(id: number) {
    const registro = Object.entries(this.db).find(([_, cliente]) => {
      return cliente.id === id;
    });

    if (registro) {
      const [_, cliente] = registro;
      return cliente;
    }
    return undefined;
  }

  adicionaCliente(cliente: ICliente) {
    this.db[cliente.id] = cliente;
  }

  listaClientes(): ICliente[] {
    return Object.values(this.db);
  }
}
