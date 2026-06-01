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

export interface IClienteController {
  repository: IRepository;
  buscaClientePorId(id: number): ICliente | undefined;
  adicionaCliente(cliente: ICliente): void;
  listaClientes(): ICliente[];
}
