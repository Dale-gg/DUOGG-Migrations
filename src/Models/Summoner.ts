import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('gg_summoners')
class Summoner {
  @PrimaryGeneratedColumn('uuid')
  id: string
}

export default Summoner
