import { IRepository, ICliente, IClienteController } from "../interfaces/interfaces";

export default class ClienteController implements IClienteController {
  private repository: IRepository;

  constructor(repository: IRepository) {
    this.repository = repository;
  }

  adicionaCliente(cliente: ICliente) {
    this.repository.adicionaCliente(cliente);
  }

  listaClientes() {
    return this.repository.listaClientes();
  }
}
