import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CreateUserLane1590514796445 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'duo_users_lanes_duo_lanes',
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
            name: 'duoLanesId',
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
      'duo_users_lanes_duo_lanes',
      new TableForeignKey({
        columnNames: ['duoUsersId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'duo_users',
        name: 'PivotUserUser',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    )

    await queryRunner.createForeignKey(
      'duo_users_lanes_duo_lanes',
      new TableForeignKey({
        columnNames: ['duoLanesId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'duo_lanes',
        name: 'PivotUserLane',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('duo_users_lanes_duo_lanes')
  }
}
