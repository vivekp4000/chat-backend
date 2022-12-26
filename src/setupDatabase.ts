import  Logger  from 'bunyan';
import { config } from './config';
import mongoose from 'mongoose';

const log:Logger = config.createLogger('setupDatabase');
export default ()=>{
    const connect = ()=>{
        mongoose.connect(config.DATABASE_URL!)
        .then(()=>log.info('successfully connected to database'))
        .catch(err=>{
            log.info('error connecting to database');
            return process.exit(1);
    });
    };
    connect();
    mongoose.connection.on('disconnected',connect);
};