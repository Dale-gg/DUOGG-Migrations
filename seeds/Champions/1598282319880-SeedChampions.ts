import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Champion from '../../src/Models/Champion'
import { LolApi } from '@dale-gg/zedjs/build'

export class SeedChampions implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<void> {
    const api = new LolApi()

    const champions = []
    const { data } = await api.DataDragon.getChampion()

    for (const champion in data) {
      const dataObj = data[champion]

      const image_full = `http://ddragon.leagueoflegends.com/cdn/${dataObj.version}/img/champion/${dataObj.image.full}`
      const image_splash = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${dataObj.name}_0.jpg`
      const image_loading = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${dataObj.name}_0.jpg`

      const newChamp = {
        name: dataObj.name,
        key: dataObj.key,
        title: dataObj.title,
        tags: dataObj.tags,
        version: dataObj.version,
        image_full_url: image_full,
        image_loading_url: image_loading,
        image_splash_url: image_splash,
        image_sprite_url: dataObj.image.sprite,
      }

      champions.push(newChamp)
    }

    await connection
      .createQueryBuilder()
      .insert()
      .into(Champion)
      .values(champions)
      .execute()
  }
}
