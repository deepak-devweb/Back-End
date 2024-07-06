import mongoose, { Schema } from "mongoose";

const videosSchema = new Schema({},{timestamps: true})

export const Videos = mongoose.model("Videos", videosSchema)