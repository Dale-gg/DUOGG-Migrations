import { MigrationInterface, QueryRunner, Table } from 'typeorm'

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
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('duo_users_lanes_duo_lanes')
  }
}
