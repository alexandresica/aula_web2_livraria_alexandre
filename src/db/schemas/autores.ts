import { mssqlTable, int, varchar } from 'drizzle-orm/mssql-core';

export const autoresTable = mssqlTable('autores', {
  id: int().primaryKey().identity(),
  nome: varchar({ length: 100 }).notNull(),
  email: varchar({ length: 250 }).notNull().unique(),
});
