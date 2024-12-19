import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Credential } from "./credentialEntity";
import {Turn} from "./turnEntity";


@Entity({
 name:"users"
})
export class Usser {
    @PrimaryGeneratedColumn()
    id:number

    @Column({length:100})
    name:string

    @Column({length:255, unique:true})
    email:string

    @Column({nullable:true})
    birthdate:string
    
    @Column("integer",{nullable:true})
    nDni: number

    @OneToOne(()=>Credential)
    @JoinColumn()
    credentialsld:Credential
 
    @OneToMany(()=>Turn,(turn)=> turn.userId, { onDelete: 'CASCADE' })
    turnId:Turn[]
}