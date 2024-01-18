import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1705600132025 } from 'src/migrations/1705600132025-CreateCoursesTable';
import { CreateTagsTable1705601300116 } from 'src/migrations/1705601300116-CreateTagsTable';
import { CreateCoursesTagsTable1705602559365 } from 'src/migrations/1705602559365-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1705602964068 } from 'src/migrations/1705602964068-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1705603640365 } from 'src/migrations/1705603640365-AddTagsIdToCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1705600132025,
    CreateTagsTable1705601300116,
    CreateCoursesTagsTable1705602559365,
    AddCoursesIdToCoursesTagsTable1705602964068,
    AddTagsIdToCoursesTagsTable1705603640365,
  ],
});
