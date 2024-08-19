import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async() =>{
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDb is already connected');
        return;
    }


    try{
        mongoose.connect(process.env.MONGODB_URI,{
            dbName:'share_prompts',
            useNewUrlParse:true,
            useUnifiedTopology:true
        })

        isConnected = true;
        console.log('Mongodb connected')

    }catch(error){
        console.log(error)
    }
}