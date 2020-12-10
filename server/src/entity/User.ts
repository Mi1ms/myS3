import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn(uuid)
    id: string;

    @Column("varchar", {length: 50})
    nickname!: string;

    @Column("varchar", {length: 80})
    email: string;

    @Column("varchar", {length: 200})
    password: string;

}
