import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CreateDuozada1590843739949 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'duo_duozadas',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'duozada_date',
            type: 'timestamp',
          },
          {
            name: 'like1_id',
            type: 'uuid',
          },
          {
            name: 'like2_id',
            type: 'uuid',
          },
        ],
      }),
    )

    await queryRunner.createForeignKey(
      'duo_duozadas',
      new TableForeignKey({
        columnNames: ['like1_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'duo_likes',
        name: 'DuozadaLike1',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    )

    await queryRunner.createForeignKey(
      'duo_duozadas',
      new TableForeignKey({
        columnNames: ['like2_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'duo_likes',
        name: 'DuozadaLike2',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('duo_duozadas')
  }
}
