import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('gg_trees')
class Tree {
  @PrimaryGeneratedColumn('uuid')
  id: string
}

export default Tree
