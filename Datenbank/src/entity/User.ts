import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToMany, ManyToOne } from "typeorm"

//Rollen in einer Gruppe
export enum UserRole {
    USER = "user",              // Nutzer
    ADMIN = "admin",            // Administrator
    MEMBER = "groupmember",     // Gruppenmitglied
}

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
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole

    @OneToMany(type => Group, groups => groups.id)
    groups: Group[]

}

@Entity()
export class Group {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => User, user => user.groups)
    user: User[]

}