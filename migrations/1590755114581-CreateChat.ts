import {
  MigrationInterface,
  QueryRunner,
  TableForeignKey,
  Table,
} from 'typeorm'

export class CreateChat1590755114581 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'duo_chats',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user1_id',
            type: 'uuid',
          },
          {
            name: 'user2_id',
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
      'duo_chats',
      new TableForeignKey({
        columnNames: ['user1_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'duo_users',
        name: 'UserChat1',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    )

    await queryRunner.createForeignKey(
      'duo_chats',
      new TableForeignKey({
        columnNames: ['user2_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'duo_users',
        name: 'UserChat2',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('duo_chats')
  }
}
