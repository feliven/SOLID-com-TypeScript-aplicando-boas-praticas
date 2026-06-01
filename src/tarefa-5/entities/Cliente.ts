import { ICliente } from "../interfaces/interfaces";

export class Cliente implements ICliente {
  constructor(
    public readonly id: number,
    public readonly nome: string,
    public readonly email: string,
  ) {}
}
