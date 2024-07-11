import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({
    path:"../config/.env"
})
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const dbName = process.env.MONGO_DB_NAME;
const clusterUrl = process.env.MONGO_CLUSTER_URL;
const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority`;
const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to mongoDB");
    }).catch((error)=>{
        console.log(error);
    })
}


export default databaseConnection;