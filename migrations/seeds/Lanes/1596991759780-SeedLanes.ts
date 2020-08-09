import { getRepository, MigrationInterface, QueryRunner } from 'typeorm'
import { LanesSeed } from './lanes.seed'
import Lane from '../../../src/Models/Lane'

export class SeedLanes1596991759780 implements MigrationInterface {
  public async up(_: QueryRunner): Promise<void> {
    await getRepository(Lane).save(LanesSeed)
  }

  public async down(_: QueryRunner): Promise<void> {
    // do nothing
  }
}
