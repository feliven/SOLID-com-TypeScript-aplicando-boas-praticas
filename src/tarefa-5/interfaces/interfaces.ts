export interface ICliente {
  id: number;
  nome: string;
  email: string;
}

interface AdicionaListaCliente {
  adicionaCliente(cliente: ICliente): void;
  listaClientes(): ICliente[];
}

export interface IRepository extends AdicionaListaCliente {
  buscaClientePorId(id: number): ICliente | undefined;
}

export interface IClienteController extends AdicionaListaCliente {
  repository: IRepository;
}
