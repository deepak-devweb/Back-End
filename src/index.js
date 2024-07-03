import mongoose from "mongoose"
import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    
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