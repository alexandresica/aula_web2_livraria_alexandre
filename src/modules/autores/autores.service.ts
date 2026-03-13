import { Injectable } from '@nestjs/common';
import { CriarAutordto } from './autores.dto';

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
  listarAutores() {
    return autores;
  }

  listarAutor(id: number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);
    if (!autorEncontrado) {
      return 'Autor não encontrado';
    }

    return autorEncontrado;
  }

  criarAutor(bodyRequest: CriarAutordto) {
    if (!bodyRequest.nome || !bodyRequest.email) {
      return 'Nome e Email sao obrigatorios';
    }
    autores.push({
      id: autores.length + 1,
      nome: bodyRequest.nome,
      email: bodyRequest.email,
    });

    return autores;
  }
}
