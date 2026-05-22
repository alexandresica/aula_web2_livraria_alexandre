import { Injectable } from '@nestjs/common';
import { LivrosRepository } from './livros.repository';
import { criarLivroDto } from './livros.dto';
import { AutoresService } from '../autores/autores.service';

@Injectable()
export class LivrosService {
  constructor(
    private readonly livrosRepository: LivrosRepository,
    private readonly AutoresService: AutoresService,
  ) {}

  async listarLivros() {
    return await this.livrosRepository.listarLivros();
  }

  async criarLivro(bodyRequest: criarLivroDto) {
    await this.AutoresService.listarAutor(bodyRequest.id_Autor);

    return await this.livrosRepository.criarLivro(bodyRequest);
  }
}
