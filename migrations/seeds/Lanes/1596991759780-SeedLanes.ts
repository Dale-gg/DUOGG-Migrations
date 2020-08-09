import { getRepository, MigrationInterface, QueryRunner } from 'typeorm'
import { LanesSeed } from './lanes.seed'

export class SeedLanes1596991759780 implements MigrationInterface {
  public async up(_: QueryRunner): Promise<void> {
    await getRepository('duo_lanes').save(LanesSeed)
  }

  public async down(_: QueryRunner): Promise<void> {
    // do nothing
  }
}
