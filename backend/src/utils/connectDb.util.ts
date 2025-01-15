import mongoose  from "mongoose";
export default function connectDatabase()
{
    mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`).then((res)=>{
        console.log(`connection established ${res.connection.host}:${res.connection.port}`);
    }).catch((err)=>{
        console.error(err);
    })
}