import conf from '../conf/conf';
import { Client, Account, ID } from "appwrite";
class AuthServices {
    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.endpoint)
            .setProject(conf.projectId);
        this.account = new Account(this.client);
    }
    async createAcount({email, password, name}){
         try{
         const userAcount = await this.account.create( ID.unique() ,email, password, name);
         if(userAcount){
             return this.login({email ,password});  
         } 
         else{
            return userAcount;
         }
        }
         catch(e){
             throw e;
         }
    }

    async login({email, password}){
        try{
            return  await this.account.createEmailSession(email, password);
           
        }
        catch(e){
            throw e;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(e){
            throw e;
        }
        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions();
        }
        catch(e){
            throw e;
        }
    }   
}

const authServices = new AuthServices();
export default authServices;    