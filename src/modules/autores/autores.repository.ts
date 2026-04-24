import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DRIZZLE } from 'src/db/database/database.constants';
import { autoresTabela } from 'src/db/schemas';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { CriarAutordto } from './autores.dto';

@Injectable()
export class AutoresRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  async listarAutores() {
    try {
      return await this.db.select().from(autoresTabela);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar autores');
    }
  }

  async listarAutor(id: number) {
    try {
      return await this.db
        .select()
        .from(autoresTabela)
        .where(eq(autoresTabela.id, id));
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar autores');
    }
  }

  async criarAutor(bodyRequest: CriarAutordto) {
    try {
      await this.db.insert(autoresTabela).values(bodyRequest);

      const autorCriado = this.db
        .select()
        .from(autoresTabela)
        .where(eq(autoresTabela.email, bodyRequest.email));

      return autorCriado;
    } catch {
      throw new InternalServerErrorException('Erro ao criar um autor');
    }
  }
}
