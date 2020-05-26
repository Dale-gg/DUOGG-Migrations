import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('gg_runes')
class Rune {
  @PrimaryGeneratedColumn('uuid')
  id: string
}

export default Rune
