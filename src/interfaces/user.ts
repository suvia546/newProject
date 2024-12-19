import {Credential} from "../entity/credentialEntity";

export interface Iuser {
    name:string,
    email:string,
    birthdate:string,
    nDni: number,
    credentialsld:Credential
};