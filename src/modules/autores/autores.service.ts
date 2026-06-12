import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarAutordto, CriarAutordto } from './autores.dto';
import { AutoresRepository } from './autores.repository';

@Injectable()
export class AutoresService {
  constructor(private readonly autoresRepository: AutoresRepository) {}

  async listarAutores() {
    return await this.autoresRepository.listarAutores();
  }

  async listarAutor(id: number) {
    const autorEncontrado = await this.autoresRepository.listarAutor(id);
    if (!autorEncontrado) {
      throw new NotFoundException(`Autor com o id ${id} não encontrado`);
    } else if (autorEncontrado.ativo === false) {
      throw new NotFoundException(`Autor com id ${id} esta inativo`);
    }

    return autorEncontrado;
  }

  criarAutor(bodyRequest: CriarAutordto) {
    return this.autoresRepository.criarAutor(bodyRequest);
  }

  async atualizarAutor(idAutor: number, bodyRequest: AtualizarAutordto) {
    this.listarAutor(idAutor);

    return await this.autoresRepository.atualizarAutor(idAutor, bodyRequest);
  }

  async deletarAutor(idAutor: number) {
    this.listarAutor(idAutor);

    return await this.autoresRepository.deletarAutor(idAutor);
  }

  async inativarAutor(idAutor: number) {
    this.listarAutor(idAutor);

    return await this.autoresRepository.inativarAutor(idAutor);
  }
}
