import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Lane from '../../src/Models/Lane'

export class SeedLanes implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Lane)
      .values([
        {
          name: 'Top Laner',
          prefix: 'TOP',
          icons: [
            'iron',
            'silver',
            'gold',
            'platine',
            'diamond',
            'master',
            'grandmaster',
            'challenger',
          ],
          created_at: `${new Date()}`,
          updated_at: `${new Date()}`,
        },
        {
          name: 'Mid Laner',
          prefix: 'MID',
          icons: [
            'iron',
            'silver',
            'gold',
            'platine',
            'diamond',
            'master',
            'grandmaster',
            'challenger',
          ],
          created_at: `${new Date()}`,
          updated_at: `${new Date()}`,
        },
        {
          name: 'Jungler',
          prefix: 'JG',
          icons: [
            'iron',
            'silver',
            'gold',
            'platine',
            'diamond',
            'master',
            'grandmaster',
            'challenger',
          ],
          created_at: `${new Date()}`,
          updated_at: `${new Date()}`,
        },
        {
          name: 'Attack Damage Carry',
          prefix: 'ADC',
          icons: [
            'iron',
            'silver',
            'gold',
            'platine',
            'diamond',
            'master',
            'grandmaster',
            'challenger',
          ],
          created_at: `${new Date()}`,
          updated_at: `${new Date()}`,
        },
        {
          name: 'Suport',
          prefix: 'SUP',
          icons: [
            'iron',
            'silver',
            'gold',
            'platine',
            'diamond',
            'master',
            'grandmaster',
            'challenger',
          ],
          created_at: `${new Date()}`,
          updated_at: `${new Date()}`,
        },
      ])
      .execute()
  }
}
