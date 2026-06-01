export interface ICliente {
  id: number;
  nome: string;
  email: string;
}

export interface IRepository {
  buscaClientePorId(id: number): ICliente | undefined;
  adicionaCliente(cliente: ICliente): void;
  listaClientes(): ICliente[];
}

export interface IClienteController extends IRepository {
  repository: IRepository;
}
