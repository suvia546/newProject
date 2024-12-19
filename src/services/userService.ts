//model of data base
//import { Iuser } from "../interfaces/user";
import {Ilogin} from "../interfaces/login";
import {AppDataSource, dataBaseCredential, dataBaseUser}  from "../config/data-source";
import {Usser} from "../entity/userEntity";
import { credentialCreateService,validateCredentialService } from "./credentialService";
import { IcredentialDtb } from "../dtb/credentialDtb";

/*

*/
export const usersGetService = async (): Promise<Usser[]>=>{

  const users = await dataBaseUser.find({
    relations:{
      credentialsld:true,
      turnId:true
    }
  });

  return users;
};


export const userGetService = async (id:number): Promise<Usser>=>{

  const usersFounded = await dataBaseUser.find({
    relations:{
      turnId:true
    }}); 

    const userFounded =usersFounded.find((user)=>user.id === id);

     if(userFounded){
      return userFounded;
     }else{
      throw Error("Hubo un error")
     }
};

export const userCreateService = async (password:string, userName:string, name:string, email:string,
  birthdate:string, nDni:number): Promise<Usser> =>{

  //obtenerlo del body
  const user = await dataBaseUser.create({name, email, birthdate, nDni});
  const userID = await dataBaseUser.save(user);
  await credentialCreateService(userName, password);
  return userID;
    
};

export const userLoginService = async (userName:string, password:string):Promise<IcredentialDtb | void>=>{
    const userCredential = await validateCredentialService(userName,password);
    const crede = await dataBaseCredential.findOneBy({userName});
    console.log(userCredential,"es userlognservice")
    if(crede){
      const users = await dataBaseUser.find();
      const user = users.find((user)=> user.id === crede.id)

     const userLogin:IcredentialDtb = {
      id: crede.id,
      userName:crede.userName,
      password:crede.password };

     console.log(userCredential)
    if(userCredential){
       console.log("USERLOGIN")
      return userLogin;
    }else{
      console.log("PASO POR ERROR")
      throw Error("Invalid user");
    }  
  }
};