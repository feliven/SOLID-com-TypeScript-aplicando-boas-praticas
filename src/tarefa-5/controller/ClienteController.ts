import { IRepository, ICliente, IClienteController } from "../interfaces/interfaces";

export default class ClienteController implements IClienteController {
  repository: IRepository;

  constructor(repository: IRepository) {
    this.repository = repository;
  }

  buscaClientePorId(id: number): ICliente | undefined {
    return this.repository.buscaClientePorId(id);
  }

  adicionaCliente(cliente: ICliente) {
    this.repository.adicionaCliente(cliente);
  }

  listaClientes() {
    return this.repository.listaClientes();
  }
}
