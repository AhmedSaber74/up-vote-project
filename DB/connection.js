
// db connection
import mongoose from 'mongoose'


const db_connection = async () => {
    await mongoose.connect(process.env.connection_url_local)
        .then((res) => console.log(`db connected successfully`))
        .catch((err) => console.log(`db connection failed`, err))
}


export default db_connection;

