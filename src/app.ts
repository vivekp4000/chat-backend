import { ChattyServer } from './setupServer';
import express,{Express} from 'express';
import databaseconnection from './setupDatabase';
import {config } from './config';

class Application {
    public initialize():void{
        this.loadConfig();
        databaseconnection();
        const app:Express = express();      
        const server:ChattyServer = new ChattyServer(app);
        server.start();
    }
    private loadConfig():void{
        config.validateConfig();
    }
}
const application:Application = new Application();
application.initialize();