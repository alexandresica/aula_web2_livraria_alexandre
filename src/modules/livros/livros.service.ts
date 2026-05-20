import { Injectable } from '@nestjs/common';
import { LivrosRepository } from './livros.repository';
import { criarLivroDto } from './livros.dto';

@Injectable()
export class LivrosService {
  constructor(private readonly livrosRepository: LivrosRepository) {}

  async listarLivros() {
    return await this.livrosRepository.listarLivros();
  }

  async criarLivro(bodyRequest: criarLivroDto) {
    return await this.livrosRepository.criarLivro(bodyRequest);
  }
}
