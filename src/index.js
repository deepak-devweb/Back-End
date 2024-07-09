
import connectDB from "./db/index.js"
import dotenv from "dotenv"
import { app } from "./app.js"

dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGO DB connection failed", error);
})


// const app = express()

// ( async () => {
//   try {
//     mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on('error', (err) => {
//         console.error(err)
//         throw err
//     })
//     app.listen(process.env.PORT, () => {
//          console.log(`App is running on port${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.error("Receive a error", error)
//   }
// })()