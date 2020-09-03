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
            'iron/Position_Iron-Top.png',
            'bronze/Position_Bronze-Top.png',
            'silver/Position_Silver-Top.png',
            'gold/Position_Gold-Top.png',
            'Plat/Position_Plat-Top.png',
            'diamond/Position_Diamond-Top.png',
            'master/Position_Master-Top.png',
            'grandmaster/Position_Grandmaster-Top.png',
            'challenger/Position_Challenger-Top.png',
          ],
          created_at: `${new Date()}`,
          updated_at: `${new Date()}`,
        },
        {
          name: 'Mid Laner',
          prefix: 'MID',
          icons: [
            'iron/Position_Iron-Mid.png',
            'bronze/Position_Bronze-Mid.png',
            'silver/Position_Silver-Mid.png',
            'gold/Position_Gold-Mid.png',
            'platine/Position_Plat-Mid.png',
            'diamond/Position_Diamond-Mid.png',
            'master/Position_Master-Mid.png',
            'grandmaster/Position_Grandmaster-Mid.png',
            'challenger/Position_Challenger-Mid.png',
          ],
          created_at: `${new Date()}`,
          updated_at: `${new Date()}`,
        },
        {
          name: 'Jungler',
          prefix: 'JG',
          icons: [
            'iron/Position_Iron-Jungle.png',
            'bronze/Position_Bronze-Jungle.png',
            'silver/Position_Silver-Jungle.png',
            'gold/Position_Gold-Jungle.png',
            'platine/Position_Plat-Jungle.png',
            'diamond/Position_Diamond-Jungle.png',
            'master/Position_Master-Jungle.png',
            'grandmaster/Position_Grandmaster-Jungle.png',
            'challenger/Position_Challenger-Jungle.png',
          ],
          created_at: `${new Date()}`,
          updated_at: `${new Date()}`,
        },
        {
          name: 'Attack Damage Carry',
          prefix: 'ADC',
          icons: [
            'iron/Position_Iron-Bot.png',
            'bronze/Position_Bronze-Bot.png',
            'silver/Position_Silver-Bot.png',
            'gold/Position_Gold-Bot.png',
            'platine/Position_Plat-Bot.png',
            'diamond/Position_Diamond-Bot.png',
            'master/Position_Master-Bot.png',
            'grandmaster/Position_Grandmaster-Bot.png',
            'challenger/Position_Challenger-Bot.png',
          ],
          created_at: `${new Date()}`,
          updated_at: `${new Date()}`,
        },
        {
          name: 'Support',
          prefix: 'SUP',
          icons: [
            'iron/Position_Iron-Support.png',
            'bronze/Position_Bronze-Support.png',
            'silver/Position_Silver-Support.png',
            'gold/Position_Gold-Support.png',
            'platine/Position_Plat-Support.png',
            'diamond/Position_Diamond-Support.png',
            'master/Position_Master-Support.png',
            'grandmaster/Position_Grandmaster-Support.png',
            'challenger/Position_Challenger-Support.png',
          ],
          created_at: `${new Date()}`,
          updated_at: `${new Date()}`,
        },
      ])
      .execute()
  }
}
