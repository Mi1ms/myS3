import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    uuid: number;
    
    @Column()
    nickname: string;

    @Column()
    email: string;

    @Column()
    password: string;
}