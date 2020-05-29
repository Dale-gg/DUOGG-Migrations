import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

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
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )

    await queryRunner.createForeignKey(
      'duo_users_champions_gg_champions',
      new TableForeignKey({
        columnNames: ['ggChampionsId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'gg_champions',
        name: 'PivotUserChampion',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    )

    await queryRunner.createForeignKey(
      'duo_users_champions_gg_champions',
      new TableForeignKey({
        columnNames: ['duoUsersId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'duo_users',
        name: 'PivotUserUser',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('duo_users_champions_gg_champions')
  }
}
