import mongoose from 'mongoose';

const connectToDB = async ()=>{
    try{
        await mongoose.connect( process.env.MONGO_URI);
        console.log('Connected to MongoDB')
    } catch(error){
        console.log("Error while connecting to database", error)
    }
}

export default connectToDB;