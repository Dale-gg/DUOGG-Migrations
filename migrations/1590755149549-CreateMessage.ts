import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CreateMessage1590755149549 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'duo_messages',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'body',
            type: 'varchar',
          },
          {
            name: 'chat_id',
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
      'duo_messages',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'duo_users',
        name: 'MessageUser',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    )

    await queryRunner.createForeignKey(
      'duo_messages',
      new TableForeignKey({
        columnNames: ['chat_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'duo_chats',
        name: 'MessageChat',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('duo_messages')
  }
}
