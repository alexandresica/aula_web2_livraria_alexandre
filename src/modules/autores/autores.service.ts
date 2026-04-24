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
    return await this.autoresRepository.listarAutores;
  }

  async listarAutor(id: number) {
    const autorEncontrado = await this.autoresRepository.listarAutor(id);
    if (autorEncontrado.length === 0) {
      throw new NotFoundException(`Autor com o id ${id} não encontrado`);
    }

    return autorEncontrado;
  }

  criarAutor(bodyRequest: CriarAutordto) {
    return this.autoresRepository.criarAutor(bodyRequest);
  }

  // atualizarAutor(idAutor: number, bodyRequest: AtualizarAutordto) {
  //   const autorEncontrado = this.listarAutor(idAutor);

  //   if (!bodyRequest.nome && !bodyRequest.email) {
  //     throw new BadRequestException('Nome e email são obrigatórios');
  //   }

  //   if (bodyRequest.nome) {
  //     autorEncontrado.nome = bodyRequest.nome;
  //   }

  //   if (bodyRequest.email) {
  //     autorEncontrado.email = bodyRequest.email;
  //   }

  //   return autorEncontrado;
  // }

  deletarAutor(idAutor: number) {
    this.listarAutor(idAutor);

    autores = autores.filter((autor) => autor.id !== idAutor);

    return autores;
  }
}
