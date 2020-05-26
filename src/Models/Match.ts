import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('gg_matchs')
class Match {
  @PrimaryGeneratedColumn('uuid')
  id: string
}

export default Match
