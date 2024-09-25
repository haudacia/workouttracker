import mongoose from 'mongoose';
import MongoMemoryServer from 'mongodb-memory-server';
import dotenv from 'dotenv';

dotenv.config();

let memoryMongo = null;

const connectDB = async () => {
    mongoose.set('strictQuery', false);
    try {
        let dbUrl = process.env.MONGO_URL;
        if (process.env.NODE_ENV === 'test') {
            memoryMongo = await MongoMemoryServer.create();
            dbUrl = memoryMongo.getUri();
            console.log(dbUrl);
        }

        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.log(error);
    }
};

const disconnectDB = async () => {
    try {
        await mongoose.connection.close();
        if (memoryMongo) {
            await memoryMongo.stop();
        }
    } catch (error) {
        console.log(error);
    }
};

export { connectDB, disconnectDB };
