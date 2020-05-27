import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUserChampion1590514782489 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'duo_users_champions_gg_champions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'duoUsersId',
            type: 'uuid',
          },
          {
            name: 'ggChampionsId',
            type: 'uuid',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('duo_users_champions_gg_champions')
  }
}
