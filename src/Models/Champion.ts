import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('gg_champions')
class Champion {
  @PrimaryGeneratedColumn('uuid')
  id: string
}

export default Champion
