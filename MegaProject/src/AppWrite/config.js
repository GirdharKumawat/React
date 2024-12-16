import conf from '../conf/conf';
import {client , Database, Storage ,ID} from './AppWrite'


class Service {
    client = client();
    database;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.endpoint)
        .setProject(conf.projectId);
        this.database = new  Database(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug, content,image,status,userId}){
        try{
            return await this.database.createDocument(
                conf.databaseId,
                conf.collectionId, 
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                    userId
                }
            );
        }
        catch(e){
            throw e;
        }
    }

    async updatePost(slug,{title, content,image,status}){
        try{
            await this.database.updateDocument(
                conf.databaseId,
                conf.collectionId, 
                slug,
                {
                    title,
                    content,
                    image,
                    status
                }

            );
            return true;
        }
        catch(e){
            console.log(e);
            return false;
        }
    }
    async deletePost(slug){
        try{
            await this.database.deleteDocument(
                conf.databaseId,
                conf.collectionId, 
                slug
            );
            return true;
        }
        catch(e){
            console.log(e);
            return false;
        }
    }

    async getPost(slug){
        try{
            return await this.database.getDocument(
                conf.databaseId,
                conf.collectionId, 
                slug
            );
        }
        catch(e){
            throw e;
        }
    }

    async getPosts(querys=[Query.equals('status','active')]){   
        try{
            return await this.database.listDocuments(
                conf.databaseId,
                conf.collectionId, 
                querys, 
            );
        }
        catch(e){
            throw e;
        }
    }

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.bucketId,
                ID.unique(),
                file
            );
        }
        catch(e){
            throw e;
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.bucketId,
                fileId
            );
            return true;
        }
        catch(e){
            console.log(e);
            return false;
        }
    }

    getfileUrl(fileId){
        return this.bucket.getFileView(
            conf.bucketId,
            fileId);
    }
}


service = new Service();
export default service;