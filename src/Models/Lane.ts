import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('gg_lanes')
class Lane {
  @PrimaryGeneratedColumn('uuid')
  id: string
}

export default Lane
