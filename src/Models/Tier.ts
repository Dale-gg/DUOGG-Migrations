import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('gg_tiers')
class Tier {
  @PrimaryGeneratedColumn('uuid')
  id: string
}

export default Tier
