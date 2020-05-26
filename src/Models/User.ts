/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('duo_users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string
}

export default User
