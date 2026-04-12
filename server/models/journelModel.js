import mongoose from "mongoose";

const journelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    date:{
      type:Date,
      default:Date.now
    },
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true
    }
  }
);

const journel = mongoose.model('journel', journelSchema)

export default journel;