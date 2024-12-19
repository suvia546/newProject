import {Usser} from "../entity/userEntity"

export interface Ilogin{
    login:boolean | void,
    user:{
        name:string,
         email:string,
        birthdate:string,
        nDni:number}|undefined
}