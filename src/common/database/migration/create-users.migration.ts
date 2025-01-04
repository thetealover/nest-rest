import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersMigration implements MigrationInterface {
  up(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            generationStrategy: 'identity',
          },
          {
            name: 'username',
            type: 'string',
            isNullable: true,
          },
          {
            name: 'first_name',
            type: 'string',
            isNullable: true,
          },
          {
            name: 'last_name',
            type: 'string',
            isNullable: true,
          },
        ],
      }),
    );
  }

  down(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.dropTable(
      new Table({
        name: 'users',
      }),
    );
  }
}
