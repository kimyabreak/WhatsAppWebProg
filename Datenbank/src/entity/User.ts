import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToMany, ManyToOne, ManyToMany } from "typeorm"

export type UserRoleType = "admin" | "user" | "member"

// Standardvorlage User
/* @Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
*/

// Entität: Nutzer
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryColumn()
    phone: string

    @Column()
    password!: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column({
        type: "enum",
        enum: ["admin", "user", "member"],
        default: "admin",
    })
    role: UserRoleType

    @OneToMany(type => Group, groups => groups.id)
    groups: Group[]

}

@Entity()
export class Group {

    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(type => User, user => user.groups)
    user: User[]

}