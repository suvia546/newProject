import { dataBaseCredential } from "../config/data-source";
import { Credential } from "../entity/credentialEntity";
import { dataBaseUser } from "../config/data-source";

export const credentialCreateService = async (userName:string, password:string): Promise<Credential | void> =>{
          
      const newCredential = await dataBaseCredential.create({userName:userName, password:password});
                           await dataBaseCredential.save(newCredential);
      const newUser = await dataBaseUser.findOneBy({id:newCredential.id});
      if(newUser){
            newUser.credentialsld = newCredential;
            await dataBaseUser.save(newUser);
      }else{
            throw Error("Error");
      }
            
    
            
   };

export const validateCredentialService = async (userName:string, password:string ): Promise<boolean | void> =>{  

         const userFind: Credential | null = await dataBaseCredential.findOneBy(({userName:userName}));
         if(userFind){
          if( userFind.password === password && userFind.userName === userName){
               return true;
           }else{
            return false;
           }
          
         }else{
            throw Error("Invalid user")
         } 
   };