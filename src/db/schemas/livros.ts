import {
  mssqlTable,
  int,
  varchar,
  text,
  datetime,
  bit,
} from 'drizzle-orm/mssql-core';
import { autoresTabela } from './autores';
export const livrosTabela = mssqlTable('livros', {
  id: int().primaryKey().identity(),
  idAutor: int('id_autor')
    .notNull()
    .references(() => autoresTabela.id),
  titulo: varchar('titulo', { length: 100 }).notNull(),
  descricao: text('descricao').notNull(),
  ativo: bit('ativo').notNull().default(true),
  criadoEm: datetime('criado_em').notNull().defaultGetDate(),
});

export type Livro = typeof livrosTabela.$inferInsert;
export type CriarLivro = typeof livrosTabela.$inferInsert;
