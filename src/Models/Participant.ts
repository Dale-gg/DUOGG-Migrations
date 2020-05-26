import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('gg_participants')
class Participant {
  @PrimaryGeneratedColumn('uuid')
  id: string
}

export default Participant
