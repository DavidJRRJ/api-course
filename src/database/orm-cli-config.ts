import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1705600132025 } from 'src/migrations/1705600132025-CreateCoursesTable';
import { CreateTagsTable1705601300116 } from 'src/migrations/1705601300116-CreateTagsTable';
import { CreateCoursesTagsTable1705602559365 } from 'src/migrations/1705602559365-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1705602964068 } from 'src/migrations/1705602964068-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1705603640365 } from 'src/migrations/1705603640365-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

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
