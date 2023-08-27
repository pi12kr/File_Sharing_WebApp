import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch(error){
        console.error('Error while connecting with the Database', error.message);
    }
}

export default DBConnection;