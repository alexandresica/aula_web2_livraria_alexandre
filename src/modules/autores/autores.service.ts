import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarAutordto, CriarAutordto } from './autores.dto';
import { AutoresRepository } from './autores.repository';

let autores = [
  {
    id: 1,
    nome: 'João da Silva',
    email: 'joao@gmail.com',
  },
  {
    id: 2,
    nome: 'Maria Oliveira',
    email: 'maria@gmail.com',
  },
  {
    id: 3,
    nome: 'Pedro Santos',
    email: 'pedro@gmail.com',
  },
];
@Injectable()
export class AutoresService {
  constructor(private readonly autoresRepository: AutoresRepository) {}

  async listarAutores() {
    return this.autoresRepository.listarAutores();
  }

  async listarAutor(id: number) {
    const autorEncontrado = await this.autoresRepository.listarAutor(id);
    if (!autorEncontrado) {
      throw new NotFoundException(`Autor com o id ${id} não encontrado`);
    }

    return autorEncontrado;
  }

  criarAutor(bodyRequest: CriarAutordto) {
    return this.autoresRepository.criarAutor(bodyRequest);
  }

  async atualizarAutor(idAutor: number, bodyRequest: AtualizarAutordto) {
    await this.listarAutor(idAutor);

    return this.autoresRepository.atualizarAutor(idAutor, bodyRequest);
  }

  async deletarAutor(idAutor: number) {
    await this.listarAutor(idAutor);

    return this.autoresRepository.deletarAutor(idAutor);
  }
}
